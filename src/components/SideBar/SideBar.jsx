import css from "./SideBar.module.css";
import Filters from "../Filters/Filters";

export default function SideBar() {
  return (
    <div className={css.sidebar}>
      <Filters />
    </div>
  );
}
