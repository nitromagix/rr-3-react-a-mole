//

import { useState, useEffect } from "react";
import MoleImage from '../mole.png'

import trace from "../helper";


function Mole(props) {
  const clickMe = (e) => {
    alert(e.target)
  }
  return (
    <div className="mole" onClick={props.moleOnClick}>
      <img src={MoleImage} alt="Mole"/>
    </div>
  );
}

export default Mole;
