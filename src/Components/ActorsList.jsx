import React,{useState,useEffect} from 'react';
import '../App.css';
import Table from '../Components/Table';
import {Link} from 'react-router-dom';
function ActorsList() {
// State
 const [actors,setActors]=useState([]);
 const[favorite,setFavorite]=useState(new Set());
 //this.state = {
    //checkedItems: new Set()
  //};
 // Api call
 const customUrl='https://swapi.co/api/people/';
 const fetchActors=async()=>{
     const response= await fetch(customUrl);
     const results=await response.json();
     console.log(results);
     setActors(results.results);
 };

 // Execute API call once the component mounts
 useEffect(()=>{
    fetchActors();
 },[]);

 const onButtonClick=(actorId)=>{
    
    const newFavorite = new Set(favorite);
    if(newFavorite.size!==5 ){

        if(newFavorite.has(actorId)){
            newFavorite.delete(actorId);
            setFavorite(newFavorite);
        }else{
            newFavorite.add(actorId);
            setFavorite(newFavorite);
        }
    }else{
        if(newFavorite.has(actorId)){
            if(newFavorite.has(actorId)){
                newFavorite.delete(actorId);
                setFavorite(newFavorite);
            }else{
                newFavorite.add(actorId);
                setFavorite(newFavorite);
            }
        }else{
            alert('You can only choose 5 favorite!');
        }
    }
  };

  return (
    <div className="App">
      <h1>ActorsList</h1>
      <table className="table table-striped table-dark">
            <thead>
                <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Gender</th>
                <th scope="col">Date Of Birth</th>
                <th scope="col">Favorite</th>
                </tr>
            </thead>
            <tbody>
            {actors.map((actor,index)=>(
           
            <tr key={actor.url}>
            <td>{actor.url.substring(actor.url.length-1,customUrl.length)}</td>
             <td>  
               <Link to={`details/${actor.url.substring(actor.url.length,customUrl.length)}${favorite.has(actor.url.substring(actor.url.length-1,customUrl.length))}`}>
                    {actor.name}
               </Link> 
            </td>
            <td>{actor.gender}</td>
            <td>{actor.birth_year}</td>
            <td>
                <button  className={favorite.has(actor.url.substring(actor.url.length-1,customUrl.length))?"fa fa-heart-o selected-favorite":"fa fa-heart-o"} onClick={()=>onButtonClick(actor.url.substring(actor.url.length-1,customUrl.length))}>
                <span>{favorite.has(actor.url.substring(actor.url.length-1,customUrl.length))?"Yes":"No"}</span>
                </button>
            </td>
            </tr>
            ))} 

            </tbody>
     </table>
      
    </div>
  );
}

export default ActorsList;
