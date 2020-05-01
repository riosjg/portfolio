import React from 'react';
import '../style/aboutMe.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGrinAlt } from '@fortawesome/free-solid-svg-icons'
import logo from '../logo.svg'

const AboutMe = () => {
    return(
        <div id="container">
            <div>
            <img src=""></img>
                <h1 className="d-inline">About me</h1>
                <FontAwesomeIcon icon={faGrinAlt} />
                </div>
        <div id="grid" className="col-10">
            <ul>
                <li className="col-2"> <img src={logo}></img> </li>
                <li className="col-2"></li>
                <li className="col-2"></li>
                <li className="col-2"></li>
                <li className="col-2"></li>
            </ul>
        </div>
        </div>
            

    )
}

export default AboutMe;