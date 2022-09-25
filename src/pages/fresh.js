import React from 'react'
import {useRef, useEffect, useState} from 'react'
import unionPic from '../img/union.png';
import wolfie from '../img/wolfie.png';
import '../console.css';

const Freshman = (props) => {
  // const [background, setBackground] = useState(false);
  const canvasRef = useRef();
  const [x, setX] = useState(0);

  const handleClick = (x) => {
    setX(x+1);
  }
  
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
        this.position = {
          x: 0,
          y: 200
        }
        this.velocity = {
          x: 0,
          y: 0
      }
      const image = new Image();
      image.src = "http://localhost:7000/wolfie.png";

        image.onload = () => {
          this.image = image;
          this.width = 100;
          this.height = 100;
        }

      }
      draw () {
        if(this.image) {
        //   const render = () => {
        //   context.drawImage(pond, 0, 0);
        //   context.beginPath();
        //   context.drawImage(this.image, 
        //     this.position.x, 
        //     this.position.y, 
        //     );
        //   requestAnimationFrame(render)
        //   }
        //   render()
        // }




          context.drawImage(
            this.image, 
            this.position.x, 
            this.position.y,
            100,
            100);
          }
      }
    }

    debugger;
    const wolfie = new Wolfie();
    wolfie.draw();

    function animate() {
      context.clearRect(0, 0, canvas.width, canvas.height);
      context.drawImage(pond, 0, 0);
      wolfie.draw();
      requestAnimationFrame(animate);
    }

    animate();





















    // const canvas = canvasRef.current;
    // const context = canvas.getContext('2d');
    // // canvas.width = 800;
    // // canvas.height = window.innerHeight * .80;
    // let union = new Image();
    // let wolfieImage = new Image();
    // //union.src = unionPic;
    // union.src = "http://localhost:7000/rothpond.png";
    // union.onload = () => {
    //   context.drawImage(union, 0, 0, 500, 800);
    // }
    // //wolfieImage.src = wolfie;
    // wolfieImage.src = "http://localhost:7000/wolfie.png";
    // wolfieImage.onload = () => {
    //   const render = () => {
    //   context.drawImage(union, 0, 0, window.innerWidth, window.innerHeight * 1.5);
    //   context.beginPath();
    //   context.drawImage(wolfieImage, x, 0, window.innerWidth / 2, window.innerHeight / 1.5);
    //   requestAnimationFrame(render)
    //   }
    //   render()
    // }
   // union.src = unionPic;
    // union.onload = () => {
    //   //context.drawImage(union, 0, 0, canvas.width, canvas.height);
    // }
    // class Wolfie {
    //     image = new Image();
    //     constructor(x, y) {
    //         this.position = {
    //             x: x,
    //             y: y
    //         }
    //         //this.image.src = wolfie;
    //         // this.image.onload = () => {
    //         //   
    //         //     this.width = 200;
    //         //     this.height = 200;
    //         // }
    //     }
    //     draw() {
    //         if(this.image) {                 
    //             if(background === false) {
    //               union.onload = () => {
    //                 context.drawImage(union, 0, 0, canvas.width, canvas.height);
    //                 setBackground(true);
    //               }
    //             }
    //             union.src = unionPic;
    //             this.image.onload = () => {
                      
    //                   this.width = 200;
    //                   this.height = 200;
    //                   context.drawImage(this.image, 0, 0, 150, 200);
    //             }
    //             this.image.src = wolfie;
    //             /*context.drawImage(
    //                 this.image, 
    //                 this.position.x, 
    //                 this.position.y, 
    //                 this.width, 
    //                 this.height);
    //                 */
    //         }
    //     }
    // }
    // debugger;
    // const wolfie1 = new Wolfie(window.innerWidth / 2, window.innerHeight / 2);
    // wolfie1.draw();
    }, []);

  return (
  <>
    <h1 style={{textAlign: 'center'}}> Level 1: Freshman </h1>
    <canvas ref={canvasRef} width='1000px' height='500px'/>
  </>
  );
}

export default Freshman;