import { useState } from "react";
import CategoryList from "../UI/CategoryList/CategoryList";
import Button from "../UI/Button/Button";
import Location from "../Location/Location";
import ModalWrapper from "../UI/ModalWrapper/ModalWrapper";
import FavoriteButton from "../UI/FavoriteButton/FavoriteButton";
import ModalContent from "../ModalContent/ModalContent";
import formatPrice from "../../auxiliary/formatPrice";
import EllipsisText from "../UI/EllipsisText/EllipsisText";
import Stars from "../UI/Stars/Stars";
import getCategoryFavorites from "../../auxiliary/getCategoryFavorites";
import Image from "../UI/Image/Image";
import css from "./FavoriteCard.module.css";

export default function Card({
  id,
  imgUrl,
  name,
  price,
  rating,
  location,
  details,
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
          <EllipsisText text={name} maxLines={1} className={css.title} />
          <div className={css.wrapperSecondLine}>
            <Stars value={rating} />
            <p className={css.price}>{formatPrice(price)}</p>
          </div>
          <div className={css.locationWrapper}>
            <Location location={location} />
            <FavoriteButton id={id} />
          </div>
          <hr className={css.line} />

          <CategoryList
            categories={getCategoryFavorites(details)}
            containerStyle={css.categoriesList}
          />
        </div>

        <Button variant="color" width="173px" onClick={handleClick}>
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
