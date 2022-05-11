import React from "react";
import "./App.css";
import Input from "./components/Input";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Input placeholder={"TypeScript"} />
        <Input placeholder={"JavaScript"} label={"Linguagem"} />
      </header>
    </div>
  );
}

export default App;
