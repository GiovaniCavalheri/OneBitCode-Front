import { useState } from "react";

import "./App.css";

function App() {
  const [contador, setContador] = useState(0);

  const aumentar = () => {
    setContador(contador + 1);
  };

  const diminuir = () => {
    if (contador > 0) {
      setContador(contador - 1);
    } else {
      alert("Não é possivel diminuir");
    }
  };

  const resetar = () => {
    setContador(0);
  };

  return (
    <>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={aumentar}>Aumentar</button>
        <button onClick={diminuir}>Diminuir</button>
        <button onClick={resetar}>Resetar</button>
        <div>{contador}</div>
      </div>
    </>
  );
}

export default App;
