import { useState } from "react";
import iconsPath from "../../assets/img/icons.svg";
import ModalWrapper from "../UI/ModalWrapper/ModalWrapper";
import GoogleMapComponent from "../GoogleMapComponent/GoogleMapComponent";

import css from "./Location.module.css";

export default function Location({ location, isModalOpen }) {
  const [isShowMap, setIsShowMap] = useState(false);

  const handleShowMap = () => {
    setIsShowMap(true);
  };

  const handleCloseMap = () => {
    setIsShowMap(false);
  };

  return (
    <address className={css.container}>
      <button className={css.btn} onClick={handleShowMap}>
        <svg className={css.icon} width="16" height="16" aria-label="btn icon">
          <use href={`${iconsPath}#map-pin`} />
        </svg>
      </button>
      <p className={css.location}>{location}</p>

      {isShowMap && (
        <ModalWrapper
          onClose={handleCloseMap}
          portalId={"portal-map"}
          isModalOpen={isModalOpen}
        >
          <GoogleMapComponent location={location} />
        </ModalWrapper>
      )}
    </address>
  );
}
