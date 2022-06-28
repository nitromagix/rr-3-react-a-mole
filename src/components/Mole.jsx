//

import { useState, useEffect } from "react";
import trace from "../helper";

function Mole(props) {
  const clickMe = (e) => {
    alert(e.target)
  }
  return (
    <div className="mole" onClick={props.moleOnClick}>
      <span>Mole</span>
    </div>
  );
}

export default Mole;
