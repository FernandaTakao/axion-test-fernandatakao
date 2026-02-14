import styles from "../styles/login.module.css";

function Input({
  label,
  placeholder,
  type,
  icon,
  value,
  onChange
}) {
  return (
    <div className={styles.inputContainer}>
      <label className={styles.label}>{label}</label>
      <div className={styles.inputWrapper}>
        <input
          type={type}
          placeholder={placeholder}
          className={styles.input}
          value={value}
          onChange={onChange}
        />
        <img
          src={icon}
          alt=""
          className={styles.icon}
        />
      </div>
    </div>
  );
}

export default Input;

