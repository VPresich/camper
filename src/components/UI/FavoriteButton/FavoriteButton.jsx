import { useDispatch, useSelector } from "react-redux";
import clsx from "clsx";
import { selectFavorites } from "../../../redux/campers/selectors";
import {
  addToFavorites,
  removeFromFavorites,
} from "../../../redux/campers/slice";
import iconsPath from "../../../assets/img/icons.svg";
import css from "./FavoriteButton.module.css";

export default function FavoriteButton({ id }) {
  const dispatch = useDispatch();

  const favorites = useSelector(selectFavorites);
  const isFavorite = favorites.includes(id);

  const handleToggleFavorite = () => {
    if (isFavorite) {
      dispatch(removeFromFavorites(id));
    } else {
      dispatch(addToFavorites(id));
    }
  };

  return (
    <button className={css.btn} onClick={handleToggleFavorite}>
      <svg
        className={clsx(isFavorite ? css.favorite : css.default)}
        width="24"
        height="24"
        aria-label="btn icon"
      >
        <use href={`${iconsPath}#favorite`} />
      </svg>
    </button>
  );
}
