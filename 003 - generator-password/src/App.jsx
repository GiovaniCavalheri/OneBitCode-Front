import { useState } from "react";
import Input from "./Components/input";

function App() {
  // criando state;
  // password = valor
  // set funcao modificadora
  const [password, setPassword] = useState("");
  const [copyText, setCopyText] = useState("Copiar");
  // ==> Criando state para o input
  const [customSize, setCustomSize] = useState(12);

  // ==> Criando state para renderização
  const [showInput, setShowInput] = useState(false);

  const passwordSize = showInput ? customSize : 8;
  function generatePassword() {
    const characters =
      "'1234567890-=!@#$%¨&*()_+qwertyuiop[asdfghjklç~]zxcvbnm,.;/QWERTYUIOP{ASDFGHJKLÇ^}ZXCVBNM<>:?";

    let newPassword = "";
    for (let i = 0; i < passwordSize; i++) {
      const position = Math.floor(Math.random() * characters.length);
      newPassword += characters[position];
    }
    setPassword(newPassword);
    setCopyText("Copiar");
  }

  function copyToClipboard() {
    window.navigator.clipboard.writeText(password);
    setCopyText("Copiado!");
  }

  return (
    <div>
      <h1>Gerador de senhas</h1>
      <div>
        <label htmlFor="showInput">Customizar Tamanho: </label>
        <input
          type="checkbox"
          id="showInput"
          value={showInput}
          onChange={() => setShowInput((currentState) => !currentState)}
        />
      </div>

      {!showInput ? (
        <div>
          <label htmlFor="passwordSize">Tamanho: </label>
          <Input
            passwordSize={customSize}
            setPasswordSize={setCustomSize}
          />
        </div>
      ) : null}
      {/* null == falso  */}

      <button onClick={generatePassword}>
        Gerar senha de {passwordSize} caracteres!
      </button>
      <button onClick={copyToClipboard}>{copyText}</button>
      <div>{password}</div>
    </div>
  );
}

export default App;
