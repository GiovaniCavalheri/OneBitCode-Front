// React cria interface de forma declarativa, ou seja: você descreve como quer que a interface pareça em determinado estado, e o React cuida de renderizar.

// O JSX deixa essa descrição simples de ler e manter.

// Por exemplo, sem JSX seria preciso usar React.createElement() o tempo todo pra criar cada div, botão, texto etc.
// Com JSX, isso fica legível e mais natural.

const element = <h1> Olá Mundo. </h1> 

const anotherElement = (
    <div>
        <h1>Text</h1>
        <ul>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
        </ul>
    </div>
)