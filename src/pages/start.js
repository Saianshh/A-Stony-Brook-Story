import React from 'react'
import { Grid, Item, Paper, Button } from '@mui/material';
import Image from '../img/start_background.jpg'
import Image2 from '../img/start_button.png'
import Image3 from '../img/title.png'
import Image4 from '../img/wall.jpeg'

import './start.css'
import { useNavigate } from 'react-router-dom';

const Start = () => {
  let navigate = useNavigate(); 

  const handleClick = () =>{ 
    let path = `/console`; 
    navigate(path);
  }
  return (
    <>
    <div style ={{
        backgroundImage: `url(${Image4})`, 
        marginTop: '12px'
    }}>
      <div class = "background" style ={{
        backgroundImage: `url(${Image})`, 
    }}>
        <img class = "title" style ={{height: '70px', marginTop: '170px', marginLeft: '100px'}} src = {Image3}/>
        <Button style ={{marginLeft:'400px', marginTop:'10px'}} onClick = {handleClick}><img class = "button" src = {Image2}/></Button>
      </div>
    </div>
    </>
  )
}

export default Start