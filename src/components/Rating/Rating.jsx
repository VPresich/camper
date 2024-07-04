import iconsPath from "../../assets/img/icons.svg";
import css from "./Rating.module.css";

export default function Rating({ rating }) {
  const count = Math.round(rating.value);
  const stars = Array.from({ length: count }, (_, index) => (
    <li key={index} className={css.star}>
      <svg className={css.icon} aria-label="star icon">
        <use href={`${iconsPath}#icon-star`} />
      </svg>
    </li>
  ));
  return (
    <div className={css.container}>
      <ul className={css.stars}>{stars}</ul>
      <p
        className={css.reviewers}
      >{`${rating.value} (${rating.quantity} Reviews)`}</p>
    </div>
  );
}
