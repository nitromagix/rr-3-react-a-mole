//

import { useState } from "react";
import MoleContainer from "./components/MoleContainer";
// import trace from "./helper";

import "./App.css";

function App() {
   const [score, setScore] = useState(0);

   const createMoleHills = () => {
      const hills = [];

         for (let i = 0; i < 9; i++) {
            hills.push(
               <MoleContainer
                  key={i}
                  setScore={setScore}
                  score={score}
               />
            );
      }
      return <div>{hills}</div>;
   };

   return (
      <div className="App">
         <h2><strong>Score: {score}</strong></h2>
         {createMoleHills()}
      </div>
   );
}

export default App;
