import { NavLink } from "react-router-dom";

export const NavBar = () => {
  return (
    <header>
      <div>
        <NavLink to="/" end>
          Home
        </NavLink>
        <NavLink to="/tweets">Tweets</NavLink>
      </div>
    </header>
  );
};
