import { useState } from "react";
import iconsPath from "../../assets/img/icons.svg";
import MapComponent from "../MapComponent/MapComponent";
import css from "./Location.module.css";

export default function Location({ location }) {
  const [showMap, setShowMap] = useState(false);

  const handleShowMap = () => {
    setShowMap(true);
  };

  return (
    <address className={css.container}>
      <button className={css.btn} onClick={handleShowMap}>
        <svg className={css.icon} width="16" height="16" aria-label="btn icon">
          <use href={`${iconsPath}#map-pin`} />
        </svg>
      </button>
      <p className={css.location}>{location}</p>
      {showMap && <MapComponent location={location} />}
    </address>
  );
}
