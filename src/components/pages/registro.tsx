import "../../styles/login.css";
import { RiLock2Fill, RiUser3Fill, RiMailFill } from "react-icons/ri";
const Registro = () => {
  return (
    <main>
      <div id="root">
        <div className="wrapper">
          <form action="registro.php" method="post">
            <h2>Registre-se</h2>
            <div className="input-box">
              <input
                type="text"
                id="email"
                placeholder="E-mail"
                required
                name="email"
              />
              <i>
                <RiMailFill />
              </i>
            </div>
            <div className="input-box">
              <input
                type="text"
                id="username"
                placeholder="Usuário"
                required
                name="username"
              />
              <i>
                {" "}
                <RiUser3Fill />
              </i>
            </div>
            <div className="input-box">
              <input
                type="password"
                id="password"
                placeholder="Senha"
                required
                name="password"
              />
              <i>
                {" "}
                <RiLock2Fill />
              </i>
            </div>
            <button type="submit" className="btn">
              Registrar-se
            </button>
            <div className="register-link">
              <p>
                Já possui uma conta? <a href="login">Logar-se</a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
};

export default Registro;
