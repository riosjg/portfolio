import React, { useState, useEffect } from 'react';
import '../style/Projects.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode } from '@fortawesome/free-solid-svg-icons'
import ProjectBox from '../components/ProjectBox'
import img_first from '../assets/reactIcon.png'
import img_second from '../assets/reactIcon2.png'
import gif_first from '../assets/reactIcon3.png'
import gif_second from '../assets/reactIcon4.png'

const Project = () => {
    //states
    const imgList = [img_first, img_second]
    const gifList = [gif_first, gif_second]
    const [currentImg, setCurrentImg] = useState(imgList);
    //functions
    const setContHeight = () =>{
        let box = document.getElementsByClassName('box');
        let title = document.getElementById('title');
        let cont = document.getElementById('container');
        let amntBoxes;
        if(window.innerWidth > window.innerHeight && box.length%3!=0){
            if(box.length%3==1){
                amntBoxes = ((box.length)/3) +1; //if there is only one box in a row
            }else{
                amntBoxes = ((box.length -1)/3) +1; //if there are 2 boxes in a row
            }
        }else{
            amntBoxes = ((box.length+1)/3); //if the last row is complete
        }
        if(window.innerWidth > window.innerHeight){ //if it's in desktop view
            cont.style.height = `${( (amntBoxes * box[0].offsetHeight) + title.offsetHeight)  }px`
        }else{
            cont.style.height = `${( ( (box.length) * box[0].offsetHeight) + title.offsetHeight) + 100 }px`
        }
    }
    const setBgOnHover = (ind) =>{
        setCurrentImg(list => list.map((image, index) => index === ind ? gifList[index] : image))
        console.log('gif')
    }
    const setBgOutHover = (ind) =>{
        setCurrentImg(list => list.map((image, index) => index === ind ? imgList[index] : image))
        console.log('img')
    }
    //created
    useEffect(() => {
        setContHeight();
        window.addEventListener('resize', setContHeight);

    }, [])
    return ( 
        <div id="container">
            <h1 onMouseEnter={() => setBgOnHover(0)} onMouseOut={() => setBgOutHover(0)} id="title">Personal work <FontAwesomeIcon icon={faCode} /></h1>
            {imgList.map((e, index) => 
            <div key={index} onMouseEnter={() => setBgOnHover(index)} onMouseOut={() => setBgOutHover(index)}>
                <ProjectBox bg={currentImg[index]}/>
            </div>
            )}
            
            

        </div>
     );
}
 
export default Project;