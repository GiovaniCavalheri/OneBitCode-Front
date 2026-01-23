import { Outlet } from "react-router-dom";
import Header from "../Components/Header";

function RootLayout() {
  return (
    <>
      <Header />
      <main>
        <p>
          Esse é o layout principal. Abaixo estará o conteúdo dinamico de cada
          rota!
        </p>
        <hr />
        <Outlet />
      </main>
      <footer>
        <p>Feito com React Router DOM</p>
      </footer>
    </>
  );
}

export default RootLayout;
