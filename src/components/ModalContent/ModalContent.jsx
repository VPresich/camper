import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

import { selectCamperById } from "../../redux/campers/selectors";
import { getCamperById } from "../../redux/campers/operations";
import formatPrice from "../../auxiliary/formatPrice";
import getReviewersRating from "../../auxiliary/getReviewersRating";
import EllipsisText from "../UI/EllipsisText/EllipsisText";
import Rating from "../Rating/Rating";

import css from "./ModalContent.module.css";

export default function ModalContent({ id }) {
  const dispatch = useDispatch();

  const { name, price, reviews, description, gallery } = useSelector((state) =>
    selectCamperById(state, id)
  );

  useEffect(() => {
    if (!id) return;
    dispatch(getCamperById(id));
  }, [dispatch, id]);

  return (
    <div className={css.container}>
      <h3 className={css.name}>{name}</h3>
      <div className={css.wrapperRating}>
        <Rating rating={getReviewersRating(reviews)} />
        <p className={css.price}>{formatPrice(price)}</p>
      </div>

      <EllipsisText
        text={description}
        maxLines={3}
        className={css.description}
      />
    </div>
  );
}
