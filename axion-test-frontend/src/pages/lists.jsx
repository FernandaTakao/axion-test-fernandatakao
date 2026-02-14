import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../styles/lists.module.css";
import stylesLogin from "../styles/login.module.css";
import Menu from "../components/menu";
import arc from "../assets/imgs/arc.png";
import ListGrid from "../components/listgrid";
import { getPeople } from "../services/people";
import { getFoods } from "../services/foods";
import { getPlaces } from "../services/places";
import { getToken, logout } from "../services/auth";

function Lists() {
  const navigate = useNavigate();
  const [category, setCategory] = useState("foods");
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  // Verifica se o usuário está logado
  useEffect(() => {
    if (!getToken()) {
      navigate("/login");
    }
  }, [navigate]);

  // Buscar dados sempre que mudar a categoria
  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      try {
        let data = [];
        switch (category) {
          case "people":
            data = await getPeople();
            break;
          case "foods":
            data = await getFoods();
            break;
          case "places":
            data = await getPlaces();
            break;
          default:
            data = [];
        }
        setItems(data);
      } catch (err) {
        console.error("Erro ao buscar dados:", err.message);
        if (err.message.includes("Sessão expirada")) {
          logout();
          navigate("/login");
        }
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [category, navigate]);

  return (
    <div className={styles.backContainer}>
      <img src={arc} alt="" className={stylesLogin.arc} />
      <Menu category={category} setCategory={setCategory} />

      <div className={styles.paddingContainer}>
        <span className={styles.title}>LIST OF {category.toUpperCase()}</span>
        <div className={styles.line}></div>
        {loading ? (
          <span>Carregando...</span>
        ) : (
          <ListGrid items={items} />
        )}
      </div>
    </div>
  );
}

export default Lists;
