import Card from "./components/Card";
import imgCard from "../src/assets/imgreact.jpg";
import imgCard1 from "../src/assets/esb-poster.webp";
import imgCard2 from "../src/assets/rotj-poster.webp";

function App() {
  return (
    <>
      <Card title="Pôster: Star Wars (1997)" image={imgCard} />
      <Card title="Pôster: ESB Poster" image={imgCard1} />
      <Card title="Pôster: ROTJ Poster" image={imgCard2} />
    </>
  );
}

export default App;
