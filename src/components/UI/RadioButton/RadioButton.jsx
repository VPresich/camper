import React from "react";
import { Field, useField } from "formik";
import clsx from "clsx";
import css from "./RadioButton.module.css";
import iconsPath from "../../../assets/img/icons.svg";

export default function RadioBtn({
  name,
  value,
  iconId,
  title,
  fill,
  ...rest
}) {
  const [, , helpers] = useField(name);
  const handleChange = () => {
    helpers.setValue(value);
  };

  return (
    <React.Fragment key={iconId}>
      <Field
        type="radio"
        name={name}
        value={value}
        className={css.realRadio}
        id={iconId}
        onChange={handleChange}
        {...rest}
      />
      <label
        htmlFor={iconId}
        className={clsx(
          css.pseudoRadio,
          helpers.value === value && css.checked
        )}
      >
        <div className={css.iconWrapper}>
          <span>
            <svg
              className={clsx(css.radioIcon, fill ? css.fill : css.stroke)}
              width="40"
              height="28"
              aria-label={`${title} icon`}
            >
              <use href={`${iconsPath}#${iconId}`} />
            </svg>
          </span>
          <span className={css.radioLabel}>{title}</span>
        </div>
      </label>
    </React.Fragment>
  );
}
