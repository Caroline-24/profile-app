import styles from './Card.module.css';

function Card({ name, title, image, theme }) {
    return (
        <div
          className={`${styles.card} ${
            theme === "dark" ? styles.dark : styles.light
          }`}
        >
            <img src={image} alt={name} />
            <p className={styles.name}>{name}</p>
            <p className={styles.title}>{title}</p>
        </div>
    );
}

export default Card;