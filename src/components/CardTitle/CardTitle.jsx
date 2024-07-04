import css from "./CardTitle.module.css";
import FavoriteButton from "../UI/FavoriteButton/FavoriteButton";
import formatPrice from "../../auxiliary/formatPrice";

export default function CardTitle({ id, name, price }) {
  return (
    <div className={css.container}>
      <div className={css.titleWrapper}>
        <h3 className={css.title}>{name}</h3>
        <p className={css.price}>{formatPrice(price)}</p>
      </div>
      <FavoriteButton id={id} />
    </div>
  );
}
