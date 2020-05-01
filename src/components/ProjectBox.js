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
    }, [] )
    return ( 
        <div className="box"> </div>
     );
}
 
export default ProjectBox;