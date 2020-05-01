import React, { useState, useEffect } from 'react';
import '../style/Projects.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode } from '@fortawesome/free-solid-svg-icons'
import ProjectBox from '../components/ProjectBox'
import logo from '../logo.svg'

const Project = () => {
    const setContHeight = () =>{
        let box = document.getElementsByClassName('box');
        let title = document.getElementById('title');
        let cont = document.getElementById('container');
        let amntBoxes;
        if(box.length%3!=0){
            if(box.length%3==1){
                amntBoxes = ((box.length)/3) +1;
            }else{
                amntBoxes = ((box.length -1)/3) +1;
            }
        }else{
            amntBoxes = ((box.length+1)/3);
        }
        
        cont.style.height = `${( (amntBoxes * box[0].offsetHeight) + title.offsetHeight )  }px`
    }
    useEffect(() => {
        setContHeight();
    })
    return ( 
        <div id="container">
            <h1 id="title">Personal work <FontAwesomeIcon icon={faCode} /></h1>
            <ProjectBox bg={logo}/>
            <ProjectBox bg={logo}/>
            <ProjectBox bg={logo}/>
            <ProjectBox bg={logo}/>
            <ProjectBox bg={logo}/>
            <ProjectBox bg={logo}/>
            <ProjectBox bg={logo}/>
            <ProjectBox bg={logo}/>
            <ProjectBox bg={logo}/>
            <ProjectBox bg={logo}/>
            <ProjectBox bg={logo}/>
            <ProjectBox bg={logo}/>
            <ProjectBox bg={logo}/>
            <ProjectBox bg={logo}/>


        </div>
     );
}
 
export default Project;