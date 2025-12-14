import "./App.css";
import useCounter from "./hooks/useCounter";
import { useState } from "react";

// ==> Regra 1: Onde usar os hooks
// ==> Regra 2: Ordem dos hooks

function App() {
  const counter = useCounter();
  // eslint-disable-next-line no-unused-vars
  const [state1, setState1] = useState();

  return (
    <>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={counter.increment}>count is {counter.count}</button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
    </>
  );
}

export default App;
