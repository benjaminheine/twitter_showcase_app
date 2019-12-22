import React from 'react';
import {Link} from 'react-router-dom';
import './navBar.css'
// import { Nav } from 'react-bootstrap';
// import {LinkContainer} from "react-router-bootstrap";

function NavBar() {

    return(
        <body className="zentriert">

<ul className="nav justify-content-center">
  <li className="nav-item">
    <Link to="/"><button className="nav-link active" href="">Home</button></Link>
  </li>
  <li className="nav-item">
    <Link to="/userSearch"><button className="nav-link">User Search</button></Link>
  </li>
  <li className="nav-item">
    <Link to="/randomTweetShowcase"><button className="nav-link" >Random Tweet Showcase</button></Link>
  </li>
</ul>


        </body>
        


    )
}


export default NavBar;