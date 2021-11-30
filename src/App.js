import { useState } from "react";
import "./App.css";
import Character from "./components/Character";
import Picker from "./components/Picker";

function App() {
  const [head, setHead] = useState("Gelfling");

  return (
    <div className="App">
      <main>
        <header className="App-header">
          <h1>Dark Crystal Body Swap</h1>
          <Picker head={head} onHeadChange={setHead} />
          <Character head={head} />
        </header>
      </main>
    </div>
  );
}

export default App;
