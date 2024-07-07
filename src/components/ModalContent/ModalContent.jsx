import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import clsx from "clsx";
import { selectCamperById } from "../../redux/campers/selectors";
import { getCamperById } from "../../redux/campers/operations";
import formatPrice from "../../auxiliary/formatPrice";
import getReviewersRating from "../../auxiliary/getReviewersRating";
import EllipsisText from "../UI/EllipsisText/EllipsisText";
import ImagesList from "../ImagesList/ImagesList";
import ModalFeaturesTab from "../ModalFeaturesTab/ModalFeaturesTab";
import ModalReviewsTab from "../ModalReviewsTab/ModalReviewsTab";
import Rating from "../Rating/Rating";
import OrderForm from "../../components/UI/OrderForm/OrderForm";

import { TAB1, TAB2 } from "./constants";

import css from "./ModalContent.module.css";

export default function ModalContent({ id }) {
  const [selectedTab, setSelectedTab] = useState(TAB1);

  const dispatch = useDispatch();
  const {
    name,
    price,
    reviews,
    description,
    gallery,
    details,
    adults,
    transmission,
    engine,
    form,
    length,
    width,
    height,
    tank,
    consumption,
  } = useSelector((state) => selectCamperById(state, id));

  useEffect(() => {
    if (!id) return;
    dispatch(getCamperById(id));
  }, [dispatch, id]);

  const handleTabChange = (tabName) => {
    setSelectedTab(tabName);
  };

  return (
    <div className={css.container}>
      <div className={css.modalContent}>
        <section className={css.mainContent}>
          <h2 className="visually-hidden">Main content</h2>
          <h3 className={css.name}>{name}</h3>
          <div className={css.wrapperRating}>
            <Rating rating={getReviewersRating(reviews)} />
            <p className={css.price}>{formatPrice(price)}</p>
          </div>

          <ImagesList images={gallery} />
          <EllipsisText
            text={description}
            maxLines={3}
            className={css.description}
          />
        </section>

        <nav className={css.nav}>
          <ul className={css.menu}>
            <li
              onClick={() => handleTabChange(TAB1)}
              className={clsx(css.menuItem, selectedTab === TAB1 && css.active)}
            >
              {TAB1}
            </li>
            <li
              onClick={() => handleTabChange(TAB2)}
              className={clsx(css.menuItem, selectedTab === TAB2 && css.active)}
            >
              {TAB2}
            </li>
          </ul>
        </nav>
        <hr className={css.line} />
        <div className={css.wrapperTabsAndForm}>
          {selectedTab === TAB1 && (
            <section className={css.tabPanel}>
              <h2 className="visually-hidden">TAB1</h2>
              <ModalFeaturesTab
                details={{ adults, transmission, engine, ...details }}
                vechicleDetails={{
                  form,
                  length,
                  width,
                  height,
                  tank,
                  consumption,
                }}
              />
            </section>
          )}
          {selectedTab === TAB2 && (
            <section className={css.tabPanel}>
              <h2 className="visually-hidden">TAB2</h2>
              <ModalReviewsTab reviews={reviews} />
            </section>
          )}

          <div className={css.formContainer}>
            <p className={css.formCaption}>Book your campervan now</p>
            <p className={css.formtxt}>
              Stay connected! We are always ready to help you.
            </p>
            <OrderForm />
          </div>
        </div>
      </div>
    </div>
  );
}
