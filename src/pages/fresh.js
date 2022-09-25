import React from 'react'
import {useRef, useEffect, useState} from 'react'
import rothPond from '../img/rothpond.png';
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
      context.drawImage(pond, 0, 0, 1000, 640);
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
          this.height = image.height - 100;
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
      image.src = "http://localhost:7000/germ.png";

        image.onload = () => {
          this.image = image;
          this.width = 100;
          this.height = 100;
        }

      }
      draw (positionx) {
        if(this.image) {
          this.position.x = positionx;
          context.drawImage(
            this.image, 
            positionx, 
            this.position.y,
            this.width,
            this.height);
        }
      }
    }

  const wolfie = new Wolfie();
  const keysPressed = {
    ArrowUp: {
      pressed: false,
    },
    ArrowDown: {
      pressed: false
    }
  }
  const germ = new Germ(100);
  const germ2 = new Germ(350);

    let x = 1000
    function animate() {
      requestAnimationFrame(animate);
      x = x-5
      context.clearRect(0, 0, canvas.width, canvas.height);
      context.drawImage(pond, 0, 0, 1000, 640);
      wolfie.update();
      germ.draw(x)
      germ2.draw(x)
      if(keysPressed.ArrowUp.pressed && wolfie.position.y > 0) {
        wolfie.velocity.y -= 0.75;
      } else if (keysPressed.ArrowDown.pressed && wolfie.position.y < canvas.height - wolfie.height) {
        wolfie.velocity.y += 0.75;
      } else {
        wolfie.velocity.y = 0;
      }
      // if(wolfie.position !== undefined) {
      //   //console.log("EXISTS");
      //   console.log(wolfie.position.y);
      //   if(germ.position.x + germ.width <= wolfie.position.x + wolfie.width && germ.position.y >= wolfie.position.y + wolfie.height && germ.position.y + germ.height <= wolfie.position.y) {
      //     console.log("LOSER");
      //     props.setLoser(true);
      //   }
      //   if(germ2.position.x + germ2.width <= wolfie.position.x + wolfie.width && germ2.position.y >= wolfie.position.y + wolfie.height && germ2.position.y + germ2.height <= wolfie.position.y) {
      //     console.log("LOSER");
      //     props.setLoser(true);
      //   }
      // }



      if(wolfie.position !== undefined) {
        //console.log("WOLFIE X:", wolfie.position.x, "WOLFIE Y:", wolfie.position.y, "GERM 1 X:", germ.position.x, "GERM 1 Y:", germ.position.y, "GERM 2 X:", germ2.position.x, "GERM 2 Y:", germ2.position.y);
        //console.log(wolfie.position.y);

        let suby = Math.abs(germ.position.y - wolfie.position.y)
        let suby2 = Math.abs(germ2.position.y - wolfie.position.y)
        //console.log("SUBY1", suby)
        //console.log("SUBY2", suby2)
        if(suby <= 100 && germ.position.x == 0) {
         //console.log("LOSER");
          props.setLoser(true);
        }
        if(suby2 <= 100 && germ2.position.x == 0) {
          console.log("LOSER");
          props.setLoser(true);
        }
      }

    }
    animate();

    window.addEventListener('keydown', ({key}) => {
      if(key == 'ArrowUp') {
        keysPressed.ArrowUp.pressed = true;
      } else if (key === 'ArrowDown') {
        keysPressed.ArrowDown.pressed = true;
      }
    });
    window.addEventListener('keyup', ({key}) => {
      if(key == 'ArrowUp') {
        keysPressed.ArrowUp.pressed = false;
      } else if (key === 'ArrowDown') {
        keysPressed.ArrowDown.pressed = false;
      }
    });




    }, []);

  return (
  <>
    <h1 style={{textAlign: 'center', fontSize:"250%", color: 'white'}}> Survive the Germs of Roth Pond... </h1>
    <canvas ref={canvasRef} width='1000px' height='640px'/>
  </>
  );
}

export default Freshman;