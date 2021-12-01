import { useState } from "react";
import "./App.css";
import Character from "./components/Character";
import Display from "./components/Display";
import Picker from "./components/Picker";

function App() {
  const [head, setHead] = useState("Gelfling");
  const [newCatchphrase, setNewCatchphrase] = useState("");
  const [catchphrases, setCatchphrases] = useState([]);

  const handleClick = () => {
    setCatchphrases((prevState) => [...prevState, newCatchphrase]);
  };

  return (
    <div className="App">
      <main>
        <header className="App-header">
          <h1>Dark Crystal Body Swap</h1>
          <Picker
            head={head}
            onHeadChange={setHead}
            newCatchphrase={newCatchphrase}
            setCatchphrase={setNewCatchphrase}
            handleClick={handleClick}
          />
          <Display catchphrases={catchphrases} />
          <Character head={head} />
        </header>
      </main>
    </div>
  );
}

export default App;
