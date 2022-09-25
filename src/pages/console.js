import React from 'react'
import {useRef, useEffect, useState} from 'react'
import rothPond from '../img/rothpond.png';
import '../console.css';
import Freshman from './fresh.js';
import Sophomore from './soph.js';
import Junior from './junior.js';
import Senior from './senior.js';

const Console = (props) => {
  const [freshman, setFreshman] = useState(true);
  const [sophomore, setSophomore] = useState(false);
  const [junior, setJunior] = useState(false);
  const [senior, setSenior] = useState(false);
  const [winner, setWinner] = useState(false);
  const [loser, setLoser] = useState(false);

  if(freshman) {
    return (
      <Freshman setFreshman={setFreshman} setSophomore={setSophomore} setLoser={setLoser}/>
    );
  } else if (sophomore) {
    return (
      <Sophomore setSophomore={setSophomore} setJunior={setJunior} setLoser={setLoser}/>
    );
  } else if (junior) {
    return (
      <Junior setJunior={setJunior} setSenior={setSenior} setLoser={setLoser}/>
    );
  } else if (senior) {
    return (
      <Senior setSenior={setSenior} setWinner={setWinner} setLoser={setLoser}/>
    );
  }
}

export default Console;