import Stars from "../UI/Stars/Stars";
import css from "./ModalReviewsTab.module.css";

export default function ModalReviewsTab({ reviews = [] }) {
  return (
    <div className={css.container}>
      <ul className={css.reviews}>
        {reviews.map((elem, index) => (
          <li className={css.elem} key={index}>
            <div className={css.title}>
              <div className={css.letter}>
                {`${elem.reviewer_name.charAt(0).toUpperCase()}`}
              </div>
              <div>
                <p className={css.name}>{elem.reviewer_name}</p>
                <Stars value={elem.reviewer_rating} />
              </div>
            </div>
            <p className={css.text}>{elem.comment}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
