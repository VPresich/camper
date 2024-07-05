import { Field, ErrorMessage } from "formik";
import css from "./Input.module.css";

export default function Input({ name, placeholder }) {
  // const inputType = type === "calendar" && showPassword ? "text" : type;

  return (
    <div className={css.inputWrapper}>
      <Field
        name={name}
        className={css.fieldInput}
        placeholder={placeholder}
        type={css.inputType}
      />
      <ErrorMessage name={name} component="span" className={css.error} />
    </div>
  );
}
