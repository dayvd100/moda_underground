import "../../styles/login.css";
import { RiMailFill } from "react-icons/ri";

const Reset = () => {
  return (
    <main>
      <div className="wrapper">
        <form action="enviar_codigo.php" method="post">
          {/* <!-- Substitua "enviar_codigo.php" pelo arquivo de manipulação de envio de código em seu servidor --> */}
          <h2>Redefinir Senha</h2>
          <div className="input-box">
            <input type="email" name="email" placeholder="E-mail" required />
            <i>
              <RiMailFill />
            </i>
          </div>
          <button type="submit" className="btn">
            Enviar Código
          </button>
        </form>
      </div>
    </main>
  );
};

export default Reset;
