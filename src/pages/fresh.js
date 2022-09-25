import React from 'react'
import {useRef, useEffect, useState} from 'react'
import rothPond from '../img/rothpond.png';
import wolfie from '../img/wolfie.png';
import '../console.css';

const Freshman = (props) => {
  // const [background, setBackground] = useState(false);
  const canvasRef = useRef();

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');

    let pond = new Image();
    pond.src = "http://localhost:5001/rothpond.png";
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
      image.src = "http://localhost:5001/wolfie.png";

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

    class Germ {
      constructor(positiony) {
        this.position = {
          x: 900,
          y: positiony
        }
        this.velocity = {
          x: 0,
          y: 0
      }
      const image = new Image();
      image.src = "http://localhost:5001/germ.png";

        image.onload = () => {
          this.image = image;
          this.width = 100;
          this.height = 100;
        }

      }
      draw (positionx, positiony) {
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
            positionx, 
            positiony,
             100,
            100);
          }
      }
    }

    const wolfie = new Wolfie();
    let x1 = 1000
    let x2 = 1000
    let x3 = 1000
    let y1 = Math.floor(Math.random()*400);
    let y2 = Math.floor(Math.random()*400);
    let y3 = Math.floor(Math.random()*400);

    const germ1 = new Germ(y1);
    const germ2 = new Germ(y2);
    const germ3 = new Germ(y3);
    function animate() {
      if(x1 == 0){
        x1 = 1000
        y1 = Math.floor(Math.random()*100);
      }
      if(x2 == 0){
        x2 = 1000
        y2 = Math.floor(Math.random()*200);
      }
      if(x3 == 0){
        x3 = 1000
        y3 = Math.floor(Math.random()*300);
      }
      x1 = x1-13
      x2 = x2-10
      x3 = x3-8
      context.clearRect(0, 0, canvas.width, canvas.height);
      context.drawImage(pond, 0, 0, 1000, 500);
      wolfie.draw();
      germ1.draw(x1, y1)
      germ2.draw(x2, y2)
      germ3.draw(x3, y3)
      requestAnimationFrame(animate);
    }

    animate()






















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