//

import { useState, useEffect } from "react";
import MoleContainer from "./components/MoleContainer";
import trace from "./helper";

import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <MoleContainer />
      </header>
    </div>
  );
}

export default App;
