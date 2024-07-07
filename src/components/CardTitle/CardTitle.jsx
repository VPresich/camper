import css from "./CardTitle.module.css";
import FavoriteButton from "../UI/FavoriteButton/FavoriteButton";
import EllipsisText from "../UI/EllipsisText/EllipsisText";
import formatPrice from "../../auxiliary/formatPrice";

export default function CardTitle({ id, name, price }) {
  return (
    <div className={css.container}>
      <div className={css.titleWrapper}>
        <EllipsisText text={name} maxLines={1} className={css.title} />
        <p className={css.price}>{formatPrice(price)}</p>
      </div>
      <FavoriteButton id={id} />
    </div>
  );
}
