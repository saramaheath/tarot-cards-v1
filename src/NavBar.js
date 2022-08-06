import { NavLink } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  return (
    <nav className="navbar navbar--expand-md mb-4">
      <div className="container-fluid">
        <NavLink to="/">Tarot Reading</NavLink>
        <NavLink to="/deck">Deck</NavLink>
        <NavLink to="/pickdeck">Pick Deck</NavLink>
      </div>
    </nav>
  );
}

export default NavBar;
