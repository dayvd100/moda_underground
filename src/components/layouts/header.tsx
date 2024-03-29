import { NavLink } from "react-router-dom";
import "../../styles/header.css";
import React, { useState } from "react";
import { TfiMenuAlt } from "react-icons/tfi";
import classnames from "classnames";
import logo from "../../img/logbat.png";
import { IoMdPerson } from "react-icons/io";
import { RiUser3Fill } from "react-icons/ri";

function Header({ scroll }: { scroll: number }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setMenuOpen(!menuOpen);
  };

  console.log(scroll);

  return (
    <header
      className={classnames({
        hide: scroll > 1,
      })}
    >
      <div className={"header-links"}>
        <a href="home.tsx" className="logo">
          <img src={logo} title="$TyL" alt="logo-header" />
          <span>$TyL</span>
        </a>
        <nav className={`nav-mid-links ${menuOpen ? "open" : ""}`}>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/referencias">Referências</NavLink>
          <NavLink to="/social">Social</NavLink>
          <NavLink to="/loja">Loja</NavLink>
          <NavLink to="/contato">Contato</NavLink>
        </nav>
        <nav className="info-user">
          <i className="user">
            <RiUser3Fill />
          </i>
          <NavLink to="/login">Login</NavLink>
          <NavLink to="/registro">Registre-se</NavLink>
        </nav>
        <div className="menu" onClick={handleMenuClick}>
          <a>
            <TfiMenuAlt />
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
