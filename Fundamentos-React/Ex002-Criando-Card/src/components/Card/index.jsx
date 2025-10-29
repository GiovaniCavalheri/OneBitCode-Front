import imgCard from "../../assets/imgreact.jpg";
import styles from "./styles.module.css"

function Card() {
    return (
      // eslint-disable-next-line no-undef
      <div className={styles.container}>
        <img src={imgCard} alt="Um poster interativo do Star Wars" />
        <div>
          <h2>Pôster do Filme Star Wars</h2>
          <p>
            Um pôster decorativo épico do filme Star Wars, com moldura de MDF e
            tamanho A3. Uma ótima recordação de um dos mais icônicos filmes de
            todos os tempos. Este clássico pôster trará aventura, nostalgia e a
            magia de Star Wars para qualquer lugar que você decidir pendurar.
            Não perca a chance de adicionar essa linda memória ao seu acervo!
          </p>

          <button>Comprar Agora </button>
        </div>
      </div>
    );
}

export default Card;