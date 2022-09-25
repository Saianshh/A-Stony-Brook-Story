import React from 'react'
import {useRef, useEffect, useState} from 'react'
import unionPic from '../img/union.png';
import wolfie from '../img/wolfie.png';
import '../console.css';

const Freshman = (props) => {
  // const [background, setBackground] = useState(false);
  const canvasRef = useRef();

  // MIGHT CALL USESTATE WITH X AND THEN USEEFFECT PARAM

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');

    let pond = new Image();
    pond.src = "http://localhost:7000/rothpond.png";
    pond.onload = () => {
      context.drawImage(pond, 0, 0, 1000, 500);
    }
    class Wolfie {
      constructor() {
        this.velocity = {
          x: 0,
          y: 0
      }
        const image = new Image();
        image.src = "http://localhost:7000/wolfie.png";

        image.onload = () => {
          this.image = image;
          this.width = image.width - 60;
          this.height = image.height - 130;
          this.position = {
            x: 0,
            y: canvas.height / 2 - this.height / 2
          }
        }

      }
      draw () {
        context.drawImage(
          this.image, 
          this.position.x, 
          this.position.y,
          this.width,
          this.height);
      }

      update() {
        if(this.image) {
          this.draw();
          this.position.x += this.velocity.x;
          this.position.y += this.velocity.y;
        }
      }
    }

    const wolfie = new Wolfie();

    function animate() {
      context.clearRect(0, 0, canvas.width, canvas.height);
      context.drawImage(pond, 0, 0, 1000, 500);
      wolfie.update();
      requestAnimationFrame(animate);
    }
    animate();
    window.addEventListener('keydown', ({key}) => {
      if(key == 'ArrowUp') {
        console.log("UP");
        wolfie.velocity.y -= 5;
      } else if (key === 'ArrowDown') {
        console.log("DOWN");
        wolfie.velocity.y += 5;
      }
    });




    }, []);

  return (
  <>
    <h1 style={{textAlign: 'center'}}> Survive the Germs of Roth Pond... </h1>
    <canvas ref={canvasRef} width='1000px' height='500px'/>
  </>
  );
}

export default Freshman;