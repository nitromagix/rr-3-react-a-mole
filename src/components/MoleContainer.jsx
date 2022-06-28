//

import { useState, useEffect } from "react";
import Mole from "./Mole";
import Empty from "./Empty";
import trace from "../helper";

function MoleContainer(props) {
  const [displayMole, updateDisplayMole] = useState(false);

  useEffect(() => {
    trace("MoleContainer")("mounted");

    const randomNumber = Math.floor(Math.random() * 2000);
    const timer = setTimeout(() => {
      updateDisplayMole(true);
    }, randomNumber);
    trace("randomTime")(randomNumber);

    return () => {
      trace("MoleContainer")("unmounted");
      clearTimeout(timer);
    };
  });

  const moleOnClick = (e) => {
    trace("Mole")("onClick");

    props.setScore(props.score + 1);
    updateDisplayMole(false);
  };

  const show = displayMole ? <Mole moleOnClick={moleOnClick} /> : <Empty />;

  return (
    <div>
      {show}
    </div>
  );
}

export default MoleContainer;
