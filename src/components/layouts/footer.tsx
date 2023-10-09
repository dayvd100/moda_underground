import {
  RiInstagramFill,
  RiPinterestFill,
  RiTwitterXFill,
} from "react-icons/ri";
import "./footer.css";
import classnames from "classnames";
// import { useState } from "react";

interface FooterProps {
  endPage: boolean;
}

function Footer({endPage}: FooterProps) {

  return (
    <footer className={classnames(
    {"hide" : endPage === false}
    )}>
      <div>
        <div className="footer">
          <div className="socialicons">
            <a href="#">
              <RiInstagramFill />
            </a>
            <a href="#">
              <RiTwitterXFill />
            </a>
            <a href="#">
              <RiPinterestFill />
            </a>
          </div>
          <div className="footernav">
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Referências</a>
              </li>
              <li>
                <a href="#">Social</a>
              </li>
              <li>
                <a href="#">Loja</a>
              </li>
              <li>
                <a href="#">Contato</a>
              </li>
            </ul>
          </div>
          <div className="footerbottom">
            <p>
              Copyright &copy;2023: Designed by{" "}
              <span className="desing">$TyL</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
