import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import {Route, Link} from 'react-router-dom';
import Home from './components/Home';
import UserSearch from './components/UserSearch';
import RandomTweetShowcase from './components/RandomTweetShowcase';
import Navbar from './components/NavBar';

class App extends React.Component {
  render(){
    return (
      <div>
      <Navbar />
      <Route exact path="/" component={Home}/>
      <Route exact path="/userSearch" component={UserSearch}/>
      <Route exact path="/randomTweetShowcase" component={RandomTweetShowcase}/>
      </div>
    );


  }
  
}

export default App;
