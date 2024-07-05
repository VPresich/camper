import { Field, ErrorMessage } from "formik";
import css from "./TextareaForm.module.css";
export default function TextareaForm({ name, placeholder }) {
  return (
    <div>
      <Field
        as="textarea"
        name={name}
        className={css.fieldTextarea}
        placeholder={placeholder}
      />
      <ErrorMessage name={name} component="span" className={css.error} />
    </div>
  );
}
