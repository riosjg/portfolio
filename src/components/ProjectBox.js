import React, { useState, useEffect } from 'react';
import '../style/ProjectBox.css'

const ProjectBox = (props) => {
    const chargeBoxes = (props) => {
        let box = [...document.getElementsByClassName('box')];
        box.forEach(e => {
            e.style.backgroundImage = `url(${props.bg})`;
        });
    }
    useEffect( () => {
        chargeBoxes(props)
    }, [props.bg] )
    return ( 
        <div className="box">
            {/* <img src={props.bg}/> */}
        </div>
     );
}
 
export default ProjectBox;