import styles from "./styles.module.css"

// eslint-disable-next-line no-unused-vars
function Card(props) {
    return ( 
      <div className={styles.container}>
        <img className={styles.poster} src={props.image} alt="Um poster interativo do Star Wars" />
        <div>
          <h2 className={styles.titlePag}>{props.title}</h2>
          <p>
            Um pôster decorativo épico do filme Star Wars, com moldura de MDF e
            tamanho A3. Uma ótima recordação de um dos mais icônicos filmes de
            todos os tempos. Este clássico pôster trará aventura, nostalgia e a
            magia de Star Wars para qualquer lugar que você decidir pendurar.
            Não perca a chance de adicionar essa linda memória ao seu acervo!
          </p>

          <button className={styles.button}>Comprar Agora </button>
        </div>
      </div>
    );
}

export default Card;