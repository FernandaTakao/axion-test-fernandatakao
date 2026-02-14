//listgrid.jsx

import Card from "./card";
import styles from "../styles/lists.module.css";

function ListGrid({ items }) {
  function capitalizeFirstLetter(str) {
    if (!str) return "";
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  return (
    <div className={styles.listGrid}>
      {items.map((item, index) => (
        <Card
          key={index}
          name={capitalizeFirstLetter(item.name)}
          link={item.link}
        />
      ))}
    </div>
  )
}

export default ListGrid;
