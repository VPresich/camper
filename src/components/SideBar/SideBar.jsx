import css from "./SideBar.module.css";
import Location from "../Location/Location";

export default function SideBar() {
  return (
    <div className={css.sidebar}>
      <Location />
    </div>
  );
}
