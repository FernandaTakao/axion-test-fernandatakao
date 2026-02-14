import { useId } from "react";
import styles from "../styles/login.module.css";

function Checkbox({ checked, onChange, label }) {
  const id = useId();
  return (
    <div className={styles.checkboxContainer}>
      <input
        type="checkbox"
        id={id}
        checked={checked}
        onChange={onChange}
        className={styles.checkbox}
      />
      <label htmlFor={id} className={styles.labelCheckbox}>
        {label}
      </label>
    </div>
  );
}

export default Checkbox;
