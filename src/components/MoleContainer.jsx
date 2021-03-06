//

import { useState, useEffect } from "react";
import Mole from "./Mole";
import Empty from "./Empty";
// import trace from "../helper";

function MoleContainer(props) {
  const [displayMole, updateDisplayMole] = useState(false);

  useEffect(() => {
   //  trace("MoleContainer")("mounted");

    const randomNumber = Math.floor(Math.random() * 5000);
    const timer = setTimeout(() => {
      updateDisplayMole(true);
    }, randomNumber);
   //  trace("randomNumber")(randomNumber);

    return () => {
      // trace("MoleContainer")("unmounted");
      clearTimeout(timer);
    };
  }, [displayMole]);

  const moleOnClick = (e) => {
   //  trace("Mole")("onClick");

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
