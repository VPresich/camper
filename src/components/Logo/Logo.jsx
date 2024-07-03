import iconsPath from "../../assets/img/icons.svg";
import css from "./Logo.module.css";

export default function Logo() {
  return (
    <div className={css.logoContainer}>
      <svg
        className={css.logoIcon}
        width="46"
        height="32"
        aria-label="logo icon"
      >
        <use href={`${iconsPath}#icon-button1`} />
      </svg>

      <p className={css.logoText}>Camper Ukraine</p>
    </div>
  );
}
