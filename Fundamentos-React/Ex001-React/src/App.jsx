import reactLogo from './assets/react.svg'

function App() {
  return (
    <div>
      <img src={reactLogo} alt="Logo React" width={250} height={250}/>

      <h1>React</h1>
      <p>A biblioteca para interfaces de usuário web e nativas.</p>

      <button>Aprenda React</button>
      <button>Refêrencia da API</button>
      <hr />

      <h2>Crie interfaces de usuários e Componentes</h2>
      <p>React Permite que você construa intefaces de usuário a partir de pedaços individuais chamados componentes.</p>
      <hr />

      <h2>Escreva componentes com código e marcação</h2>
      <p>Componentes React são funções Javascript. A sintaxe de marcação é chamada JSX. É uma extensão da sintaxe do Javascript popularizada por React</p>
      <hr />

      <h2>Próximos passos: </h2>
      <ul>
        <li>Uso de dados dinâmicos JSX</li>
        <li>Criação de novos componentes</li>
        <li>Estilização de componentes</li>
        <li>Returilização de componentes</li>
        <li>Uso de props e childrem</li>
        <li>Uso de eventos do Javascript</li>
      </ul>
    </div>
  )
}

export default App
