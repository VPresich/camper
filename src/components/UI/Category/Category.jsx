import clsx from "clsx";
import iconsPath from "../../../assets/img/icons.svg";
import css from "./Category.module.css";

export default function Category({ idIcon, title = "", fill = true }) {
  return (
    <div className={css.container}>
      <svg
        className={clsx(fill && css.fill, !fill && css.stroke)}
        width="20"
        height="20"
        aria-label={`${title} icon`}
      >
        <use href={`${iconsPath}#${idIcon}`} />
      </svg>
      {title && <p className={css.title}>{title}</p>}
    </div>
  );
}
