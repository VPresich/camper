import { useState } from "react";
import CardTitle from "../../components/CardTitle/CardTitle";
import CategoryList from "../../components/UI/CategoryList/CategoryList";
import Button from "../UI/Button/Button";
import Location from "../../components/Location/Location";
import Rating from "../../components/Rating/Rating";
import ModalWrapper from "../UI/ModalWrapper/ModalWrapper";
import getReviewersRating from "../../auxiliary/getReviewersRating";
import ModalContent from "../ModalContent/ModalContent";
import getCategoryShortList from "../../auxiliary/getCategoryShortList";
import Image from "../UI/Image/Image";
import EllipsisText from "../UI/EllipsisText/EllipsisText";

import css from "./Card.module.css";

export default function Card({
  id,
  imgUrl,
  name,
  price,
  description,
  details,
  reviews,
  location,
}) {
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  return (
    <div className={css.container}>
      <Image imgUrl={imgUrl} name={name} />

      <div className={css.infoWrapper}>
        <div className={css.mainInfo}>
          <CardTitle name={name} price={price} id={id} />
          <div className={css.wrapperSecondLine}>
            <Rating rating={getReviewersRating(reviews)} />
            <Location location={location} isModalOpen={false} />
          </div>
        </div>
        <EllipsisText
          text={description}
          maxLines={1}
          className={css.description}
        />
        <CategoryList
          categories={getCategoryShortList(details)}
          containerStyle={css.categoriesList}
        />
        <Button variant="color" width="166px" onClick={handleClick}>
          Show more
        </Button>
      </div>
      {showModal && (
        <ModalWrapper onClose={handleClose}>
          <ModalContent id={id} />
        </ModalWrapper>
      )}
    </div>
  );
}
