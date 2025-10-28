import imgCard from "../../assets/imgreact.jpg";

function Card() {
    return (
        // eslint-disable-next-line no-undef
        <div className={styles.container}>
            <img src={imgCard} alt="Um poster interativo do Star Wars" />
        </div>
    )
}

export default Card;