//

import { useState, useEffect } from "react";
import MoleContainer from "./components/MoleContainer";
import trace from "./helper";

import "./App.css";

function App() {
  const [score, setScore] = useState(0);

  const createMoleHills = () => {
    const hills = [];
    for (let j = 0; j < 3; j++) {
      for (let i = 0; i < 3; i++) {
        hills.push(
          <MoleContainer key={`${j}${i}`} setScore={setScore} score={score} />
        );
      }
    }
    return <div>{hills}</div>;
  };

  return <div className="App">
    {score}
    {createMoleHills()}
    </div>;
}

export default App;
