import React from 'react'
import {useRef, useEffect} from 'react'
import unionPic from '../img/union.png';
import '../console.css';

const Freshman = (props) => {
  const canvasRef = useRef(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    canvas.width = 800;
    canvas.height = window.innerHeight * .80;
    let union = new Image();
    union.src = unionPic;
    union.onload = () => {
      context.drawImage(union, 0, 0, canvas.width, canvas.height);
    }
  }, []);
  // freshman will call a canvas

  return (
  <>
    <h1> TEMP STRING </h1>
    <canvas ref={canvasRef} {...props}/>
  </>
  );
}

export default Freshman;