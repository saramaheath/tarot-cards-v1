import { NavLink } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  return (
    <nav className="navbar navbar--expand-md mb-4">
      <div className="container-fluid">
        <NavLink to="/">Tarot_</NavLink>
        <NavLink to="/deck">Deck_</NavLink>
        <NavLink to="/pickdeck">Pull Cards</NavLink>
      </div>
    </nav>
  );
}

export default NavBar;
