import { Formik, Form } from "formik";
import Button from "../Button/Button";
import { schema } from "./schema";
import Input from "../Input/Input";
import TextareaForm from "../TextareaForm/TextareaForm";
import css from "./OrderForm.module.css";

export default function OrderForm() {
  const handleSubmit = (values, actions) => {
    // console.log(values);
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        date: null,
        comment: "",
      }}
      onSubmit={handleSubmit}
      validationSchema={schema}
    >
      <Form className={css.form}>
        <div className={css.info}>
          <Input name={"name"} placeholder={"Name"} />
          <Input name={"email"} placeholder={"Email"} />
          <Input name={"date"} placeholder={"Booking date"} type="date" />
          <TextareaForm name={"comment"} placeholder={"Comment"} />
        </div>
        <Button variant="color" width="160px" type="submit">
          Send
        </Button>
      </Form>
    </Formik>
  );
}
