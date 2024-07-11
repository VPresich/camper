import { Field, ErrorMessage } from "formik";
import css from "./Input.module.css";
import DatePickerField from "../DatePickerField/DatePickerField";

export default function Input({ name, placeholder, type }) {
  return (
    <div className={css.inputWrapper}>
      {type === "date" ? (
        <Field
          name={name}
          component={DatePickerField}
          placeholder={placeholder}
        />
      ) : (
        <Field
          name={name}
          className={css.fieldInput}
          placeholder={placeholder}
          type={type}
        />
      )}
      <ErrorMessage name={name} component="span" className={css.error} />
    </div>
  );
}
