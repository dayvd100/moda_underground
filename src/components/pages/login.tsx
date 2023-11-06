import "../../styles/login.css";
import { RiLock2Fill, RiUser3Fill } from "react-icons/ri";

const Login = () => {
  return (
    <main>
      <div className="wrapper">
        <form action="">
          <h2>Login</h2>
          <div className="input-box">
            <input type="text" placeholder="Usuário" required />
            <i>
              {" "}
              <RiUser3Fill />
            </i>
          </div>
          <div className="input-box">
            <input type="password" placeholder="Senha" required />
            <i>
              <RiLock2Fill />
            </i>
          </div>
          <div className="remember-forgot">
            <label>
              <input type="checkbox" />
              Lembrar-me
            </label>
            <a href="reset">Esqueci minha senha</a>
          </div>
          <button type="submit" className="btn">
            Login
          </button>
          <div className="register-link">
            <p>
              Não possue conta? <a href="registro">Registre-se</a>
            </p>
          </div>
        </form>
      </div>
    </main>
  );
};

export default Login;
