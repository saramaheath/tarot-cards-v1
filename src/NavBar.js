import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <div>
      <NavLink to="/deck">Deck</NavLink>
      <NavLink to="/pickdeck">Pick Deck</NavLink>
    </div>
  );
}

export default NavBar;