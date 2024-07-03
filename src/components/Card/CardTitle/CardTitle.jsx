import css from "./CardTitle.module.css";
import FavoriteButton from "../../UI/FavoriteButton/FavoriteButton";
import formatPrice from "../../../auxiliary/formatPrice,js";

export default function CardTitle({ id, name, price }) {
  return (
    <div className={css.container}>
      <div className={css.titleWrapper}>
        <p className={css.title}>{name}</p>
        <p className={css.price}>{formatPrice(price)}</p>
      </div>
      <FavoriteButton id={id} />
    </div>
  );
}
