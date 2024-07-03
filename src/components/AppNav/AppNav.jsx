import { NavLink } from "react-router-dom";
import css from "./AppNav.module.css";
import clsx from "clsx";

const classItem = ({ isActive }) => {
  return clsx(css.item, isActive && css.active);
};

export default function AppNav() {
  return (
    <nav className={css.nav}>
      <NavLink className={classItem} to="/">
        Home
      </NavLink>
      <NavLink className={classItem} to="/catalog">
        Catalog
      </NavLink>
      <NavLink className={classItem} to="/favorites">
        Favorites
      </NavLink>
    </nav>
  );
}
