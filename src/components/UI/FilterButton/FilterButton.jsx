import { useField } from "formik";
import clsx from "clsx";
import css from "./FilterButton.module.css";
import iconsPath from "../../../assets/img/icons.svg";

export default function InputButton({
  name,
  value,
  iconId,
  title,
  fill,
  type,
  ...rest
}) {
  const [field, , helpers] = useField({
    name,
    type: type === "checkbox" ? "checkbox" : "radio",
  });

  const handleChange = () => {
    if (type === "checkbox") {
      helpers.setValue(!field.value);
    } else {
      helpers.setValue(value);
    }
  };

  return (
    <label
      className={clsx(css.pseudoButton, {
        [css.checked]: field.value === value || field.value,
      })}
    >
      <input
        className={css.realInput}
        type={type}
        {...field}
        {...rest}
        checked={field.value === value || field.value}
        onChange={handleChange}
      />
      <div className={css.iconWrapper}>
        <span className={css.icon}>
          <svg
            className={clsx(css.icon, fill ? css.fill : css.stroke)}
            width="32"
            height="32"
            aria-label={`${title} icon`}
          >
            <use href={`${iconsPath}#${iconId}`} />
          </svg>
        </span>
        <div className={css.label}>{title}</div>
      </div>
    </label>
  );
}
