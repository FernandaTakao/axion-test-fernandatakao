import styles from "../styles/card.module.css";

function Card({name, link}) {
  return (
    <div className={styles.container}>
          <img src={link} alt={name} className={styles.image} />
          <span className={styles.label}>{name}</span>
    </div>
  );
}

export default Card;