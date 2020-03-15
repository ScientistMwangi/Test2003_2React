import React from 'react';
import './App.css';
import Nav from './Components/Nav';
import ActorsList from './Components/ActorsList';
import ActorsDetails from './Components/ActorsDetails';
import FavoriteActors from './Components/FavoriteActors';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <Router>
        <Nav/>
        <Switch>
          <Route path='/' exact component={ActorsList}/>
          <Route path='/details/:url/isFavorite' exact component={ActorsDetails}/>
          <Route path='/favorite'  component={FavoriteActors}/>
          <ActorsDetails/>
        </Switch>

      </Router>
    </div>
  );
}

export default App;
