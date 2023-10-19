import "./contato.css";
import { IoIosCall, IoIosMail, IoIosPin } from "react-icons/io";

function Contato() {
  return (
    <div>
      <div className="container2">
        <div className="content">
          <div className="left-side">
            <div className="address details">
              <i>
                <IoIosPin />
              </i>
              <div className="topic">Endereço</div>
              <div className="text-one">Recreio, RJ</div>
              <div className="text-two">Rio de Janeiro</div>
            </div>
            <div className="phone details">
              <i>
                <IoIosCall />
              </i>
              <div className="topic">Telefone</div>
              <div className="text-one">+00 00 1234 5678</div>
              <div className="text-two">+00 00 1234 5678</div>
            </div>
            <div className="email details">
              <i>
                <IoIosMail />
              </i>
              <div className="topic">Email</div>
              <div className="text-one">$tylcontact@gmail.com</div>
            </div>
          </div>
          <div className="right-side">
            <div className="topic-text">Envie sua mensagem</div>
            <p>
              Se você tiver algum trabalho artistico ou qualquer tipo de dúvida
              relacionada ao nosso site, envie uma mensagem. Será um prazer
              ajudá-lo(a).
            </p>
            <form action="#">
              <div className="input-box">
                <input type="text" placeholder="Digite seu nome" />
              </div>
              <div className="input-box">
                <input type="text" placeholder="Digite seu email" />
              </div>
              <div className="input-box message-box">
                <textarea placeholder="Digite sua mensagem"></textarea>
              </div>
              <div className="button">
                <input type="button" value="Enviar" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contato;
