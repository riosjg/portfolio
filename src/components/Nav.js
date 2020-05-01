import React from 'react';
import '../style/nav.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGrinAlt } from '@fortawesome/free-solid-svg-icons'

const AboutMe = () => {
    return(
        <div className="d-flex justify-content-center align-items-center bgNav">
            <div id="navCont" className="d-flex justify-content-around">
                <a>Home</a>
                <a>About me</a>
                <a>Projects</a>
                <a>Contact</a>
                <a>CV</a>
            </div>
        </div>

    )
}

export default AboutMe;