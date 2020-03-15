import React,{useState,useEffect} from 'react';
import '../App.css';

function ActorsDetails(props) {
console.log(props);  
//console.log(props.location.actorsListState.favorite);  
console.log(props.location.pathname);
const urlArray=props.location.pathname.split('/');
console.log(props.location.pathname.split('/'));
 //  State
 const [actorDetails,setActorDetails]=useState([]);

 // API call
 const customUrl='https://swapi.co/api/people/';
 const fetchActorDetails=async()=>{
    const response=await fetch(customUrl+urlArray[2]);
    const result=await response.json();
    setActorDetails(result);
 };

 // Execute API call on component mount
 useEffect(()=>{
     fetchActorDetails();
 },[]);

  return (
    <div className="App">
      <h1>ActorsDetails</h1>
      <table className="table table-striped table-dark">
            <thead>
                <tr>
                <th scope="col">Favorite</th>
                <th scope="col">Name</th>
                <th scope="col">Height</th>
                <th scope="col">Mass</th>
                <th scope="col">Hair-Color</th>
                <th scope="col">Skin Color</th>
                <th scope="col">Eye Color</th>
                <th scope="col">Birth Year</th>
                <th scope="col">Gender</th>

                <th scope="col">HomeWorld</th>
                </tr>
            </thead>
            <tbody>
                 <tr>
  <td><i className={urlArray[3]==='true'?"fa fa-heart-o selected-favorite":"fa fa-heart-o"}></i></td>
                <td>{actorDetails.name}</td>
                <td>{actorDetails.height}</td>
                <td>{actorDetails.mass}</td>

                <td>{actorDetails.hair_color}</td>
                <td>{actorDetails.skin_color}</td>
                <td>{actorDetails.eye_color}</td>

                <td>{actorDetails.birth_year}</td>
                <td>{actorDetails.gender}</td>
                <td>{actorDetails.homeworld}</td>
            
                </tr>
            </tbody>
     </table>
    </div>
  );
}

export default ActorsDetails;
