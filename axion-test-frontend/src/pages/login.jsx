import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../services/auth";
import styles from "../styles/login.module.css";
import Input from "../components/input";
import bg from "../assets/imgs/assets/bg.jpg";
import mail from "../assets/imgs/assets/mail.png";
import lock from "../assets/imgs/assets/lock.png";
import Checkbox from "../components/checkbox";
import arc from "../assets/imgs/arc.png";

function Login({setIsLoggedIn}) {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  async function handleLogin() {
  setError(""); // limpa erro anterior

  try {
    const data = await login(email, password);
    console.log("Login bem-sucedido:", data.user);

    setIsLoggedIn(true); // informa o App que o usuário logou
    navigate("/lists");
  } catch (err) {
    // Exibe a mensagem correta
    console.error("Erro no login:", err);
    setError(err.message || JSON.stringify(err));
  }
}

  return (
    <div className={styles.backContainer}>
      <img src={arc} alt="" className={styles.arc} />
      <div className={styles.semiLeft}></div>
      <div className={styles.semiRight}></div>
      <img src={bg} alt="" className={styles.backgroundImage} />

      <div className={styles.formContainer}>
        <h2 className={styles.logo}>O R A N G E</h2>

        <Input
          label="Email"
          placeholder="seunome@email.com"
          type="text"
          icon={mail}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <Input
          label="Password"
          placeholder="Password"
          type={showPassword ? "text" : "password"}
          icon={lock}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <Checkbox
          checked={showPassword}
          onChange={() => setShowPassword(!showPassword)}
          label="Mostrar a senha."
        />

        {error && (
          <span style={{ color: "red", fontSize: 15, marginTop: 5 }}>
            {error}
          </span>
        )}

        <a href="/recuperar-senha" className={styles.containerHelp}>
          <span className={styles.labelHelp}>
            Problemas para acessar sua conta?
          </span>
        </a>

        <button className={styles.buttonLogin} onClick={handleLogin}>
          Acessar
        </button>

        <div className={`${styles.containerHelp} ${styles.containerOr}`}>
          <div className={styles.divider}></div>
          <span className={`${styles.labelHelp} ${styles.labelOr}`}>ou</span>
          <div className={styles.divider}></div>
        </div>

        <button className={styles.buttonSingup}>Cadastrar</button>

        <div className={styles.containerInfo}>
          <a href="/infoTerms" className={styles.info}>
            Termos de uso
          </a>
          <span className={styles.infoDivider}>•</span>
          <a href="/infoPrivacy" className={styles.info}>
            Política de Privacidade
          </a>
        </div>
      </div>
    </div>
  );
}

export default Login;
