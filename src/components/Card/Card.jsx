import { useState } from "react";
import LinesEllipsis from "react-lines-ellipsis";
import CardTitle from "./CardTitle/CardTitle";
import CategoryList from "./CategoryList/CategoryList";
import Button from "../UI/Button/Button";
import getCategoryShortList from "../../auxiliary/getCategoryShortList";

import css from "./Card.module.css";

export default function Card({
  id,
  imgUrl,
  name,
  price,
  description,
  details,
}) {
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal(true);
  };

  return (
    <div className={css.container}>
      <div className={css.img}>
        <img src={imgUrl} alt={name} />
      </div>
      <div className={css.infoWrapper}>
        <CardTitle name={name} price={price} id={id} />

        <LinesEllipsis
          text={description}
          maxLine="1"
          ellipsis="..."
          trimRight
          basedOn="letters"
          component="p"
          className={css.description}
        />
        <CategoryList categories={getCategoryShortList(details)} />
        <Button variant="color" width="166px" onClick={handleClick}>
          Show more
        </Button>
      </div>
    </div>
  );
}
