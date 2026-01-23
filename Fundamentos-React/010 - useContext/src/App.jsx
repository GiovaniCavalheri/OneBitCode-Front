import Container from "./components/Container";
import Header from "./components/Header";
import UserContext from "./contexts/UserContexts";

function App() {
  const user = {
    name: "Giovani KKK",
    email: "developer.cavalheri@gmail.com",
  };

  return (
    <>
      <UserContext.Provider value={user}>
        <Header/>
        <h1>Conhecenco o useContext</h1>
        <Container />
      </UserContext.Provider>
    </>
  );
}

export default App;
