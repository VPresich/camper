import { useState, useId } from "react";
import { Field, useFormikContext } from "formik";
import ModalWrapper from "../ModalWrapper/ModalWrapper";
import GoogleMapComponent from "../../GoogleMapComponent/GoogleMapComponent";
import css from "./CustomField.module.css";

import { CiLocationOn } from "react-icons/ci";
const defaultLocation = "Kyiv, Ukraine";

export default function CustomField({ label, name, placeholder }) {
  const [showMap, setShowMap] = useState(false);
  const { values, setFieldValue } = useFormikContext();

  const id = useId();

  const handleShowMap = () => {
    setShowMap(true);
  };

  const handleCloseMap = () => {
    setShowMap(false);
  };

  const handleLocationSelect = (location) => {
    setFieldValue(name, location);
    handleCloseMap();
  };

  return (
    <div className={css.fieldWrapper}>
      <label className={css.location} htmlFor={id}>
        {label}
      </label>
      <CiLocationOn className={css.locationIcon} onClick={handleShowMap} />
      <Field
        className={css.fieldLocation}
        type="text"
        name={name}
        id={id}
        placeholder={placeholder}
      />
      {showMap && (
        <ModalWrapper onClose={handleCloseMap} portalId={"portal-map"}>
          <GoogleMapComponent
            location={values[name] || defaultLocation}
            onLocationSelect={handleLocationSelect}
          />
        </ModalWrapper>
      )}
    </div>
  );
}
