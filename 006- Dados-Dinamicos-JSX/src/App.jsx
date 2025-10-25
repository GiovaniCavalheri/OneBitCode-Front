import Title from "./components/Title";
import Subtitle from "./components/Subtitle";
import StatusText from "./components/StatusText";
import "./styles/globals.css";

// ==> Componentes

function App() {
  return (
    <div 
    style={{
      backgroundColor: "#2c2d2e",
      display: "grid",
      minHeight: "100vh",
      placeContent: "center",
      textAlign: "center"
    }}
    >
      <Title />
      <Subtitle />
      <StatusText />
    </div>
  );
}

export default App;
