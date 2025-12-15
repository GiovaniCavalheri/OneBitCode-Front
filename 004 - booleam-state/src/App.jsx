import { useState } from "react";

import "./App.css";

function App() {
  const [textOpen, setTextOpen] = useState(false);

  const alterar = () => {
    setTextOpen(!textOpen);
  };
  return (
    <>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={alterar}>
          {textOpen && <p>Este é o texto secreto! 🔒</p>}
        </button>
      </div>
    </>
  );
}

export default App;
