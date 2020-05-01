import React, { useState, useEffect} from 'react';
import '../style/intro.css';
// import { FontAwesomeIcon } from '@fontawesome/react-fontawesome'
// import { faCoffee } from '@fontawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHandPointRight, faHandPointDown } from '@fortawesome/free-solid-svg-icons'

const Intro = () => {
    const [currentArrowIcon, setCurrentArrowIcon] = useState(faHandPointRight);
    const changeArrowIcon = () => {
        (currentArrowIcon === faHandPointRight) ? setCurrentArrowIcon(faHandPointDown) : 
        setCurrentArrowIcon(faHandPointRight);
    }
    useEffect(() => {


    }, [])
    
    return ( 
        <>
            <div>
                <div className="area" >
                    <ul className="circles">
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                    </ul>
                </div>
                <div id="text" className="">
                    <h2>
                        Hello, I'm <span>Gabriel Rios</span>.
                        <br/>
                        I'm a Front-End web developer.
                    </h2>
                    <div id="hoverbg">
                        <button id="btn" onMouseOver={changeArrowIcon} onMouseOut={changeArrowIcon} >Check my projects
                            <div  className="iconContainer"><FontAwesomeIcon id="arrowIcon" icon={currentArrowIcon} /></div> 
                        </button>
                    </div>
                    
                </div>
            </div>
        </>
     );
}

export default Intro;