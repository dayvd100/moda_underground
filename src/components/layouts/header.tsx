import { NavLink } from "react-router-dom";
import './header.css'

function Header() {
    return (
      <header>
      <div className="header-links">
        <nav className="nav-mid-links">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/referencias">Referências</NavLink>
        <NavLink to="/social">Social</NavLink>
        <NavLink to="/loja">Loja</NavLink>
        <NavLink to="/contato">Contato</NavLink>
        </nav>
      </div>
      </header>
    );
  }
  
  export default Header;