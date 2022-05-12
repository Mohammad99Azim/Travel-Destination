import { Link } from "react-router-dom";
import './Navbar.css';

// font awesomeIcons for the navBar
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//import {  } from '@fortawesome/free-solid-svg-icons'
import { faYoutube , faFacebook, faInstagram} from '@fortawesome/free-brands-svg-icons'



export default function Header(prop) {
 
    return (
    <>
    <div className="navBar">
        <div className="links">
        <Link className="liksBar" to="/">Home </Link>
        <Link className="liksBar" to="#">News </Link>
        <Link className="liksBar" to="#">Contact </Link>
        </div>
        <div className="iconLinks">
        <FontAwesomeIcon className="icon yout" icon={faYoutube}/>
        <FontAwesomeIcon className="icon face" icon={faFacebook}/>
        <FontAwesomeIcon  className="icon inst" icon={faInstagram}/>
        </div>
    </div>
    </>
    );
}

