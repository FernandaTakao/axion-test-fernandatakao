import styles from "../styles/menu.module.css";

function Menu({ category, setCategory }) {
  const options = ["foods", "people", "places"];

  return (
    <div className={styles.background}>
      <span className={styles.logo}>O R A N G E</span>

      <div className={styles.optionsContainer}>
        {options.map((option) => (
          <button
            key={option}
            className={styles.options}
            onClick={() => setCategory(option)}
            style={{
              fontWeight: category === option ? 700 : 400,
              cursor: "pointer",
            }}
          >
            {option.toUpperCase()}
          </button>
        ))}
      </div>
    </div>
  )
}

export default Menu;
