import { useField } from "formik";
import clsx from "clsx";
import css from "./RadioButton.module.css";
import iconsPath from "../../../assets/img/icons.svg";

export default function RadioButton({
  name,
  value,
  iconId,
  title,
  fill,
  ...rest
}) {
  const [field, , helpers] = useField({ name, value });

  const handleChange = () => {
    helpers.setValue(value);
  };

  return (
    <label className={css.pseudoRadio}>
      <input
        className={css.realRadio}
        type="radio"
        {...field}
        {...rest}
        checked={field.value === value}
        onChange={handleChange}
      />
      <div className={css.iconWrapper}>
        <span className={css.radioIcon}>
          <svg
            className={clsx(css.radioIcon, fill ? css.fill : css.stroke)}
            width="40"
            height="28"
            aria-label={`${title} icon`}
          >
            <use href={`${iconsPath}#${iconId}`} />
          </svg>
        </span>
        <div className={css.radioLabel}>{title}</div>
      </div>
    </label>
  );
}
