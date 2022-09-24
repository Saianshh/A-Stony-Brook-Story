import React from 'react'
import {useRef, useEffect} from 'react'
import unionPic from '../img/union.png';
import '../console.css';

const Freshman = (props) => {
    const canvas = props.canvas.current;
    const context = canvas.getContext('2d');
    let union = new Image();
    union.src = unionPic;
    union.onload = () => {
      context.drawImage(union, 0, 0, canvas.width, canvas.height);
    }
    return (
        <canvas ref={props.canvas}/>
    )
}

export default Freshman;