import { Formik, Field, Form } from "formik";
import { CiLocationOn } from "react-icons/ci";
import Button from "../UI/Button/Button";
import RadioButton from "../UI/RadioButton/RadioButton";
import css from "./Filters.module.css";
import { formFilterIcons } from "./constants";

export default function Filters() {
  const handleSubmit = (values) => {
    console.log("Form submitted with values:", values);
  };

  return (
    <Formik
      initialValues={{
        location: "",
        equipment: [],
        type: "van",
      }}
      onSubmit={handleSubmit}
    >
      <Form className={css.form}>
        <div className={css.filterControls}>
          <div className={css.fieldWrapper}>
            <label className={css.location} htmlFor="location">
              Location
            </label>
            <CiLocationOn className={css.locationIcon} />
            <Field
              className={css.fieldLocation}
              type="text"
              name="location"
              id="location"
              placeholder="Kyiv, Ukraine"
            />
          </div>

          <div className={css.checkBtnWrapper}>
            <label>
              <Field type="checkbox" name="equipment" value="kitchen" />
              Kitchen
            </label>
            <label>
              <Field type="checkbox" name="equipment" value="airconditioner" />
              Air Conditioner
            </label>
            <label>
              <Field type="checkbox" name="equipment" value="automatic" />
              Automatic
            </label>
            <label>
              <Field type="checkbox" name="equipment" value="tv" />
              TV
            </label>
            <label>
              <Field type="checkbox" name="equipment" value="shower/wc" />
              Shower/WC
            </label>
          </div>

          <div className={css.vehiclefilter}>
            <h3 className={css.vehiclefilterTitle}>Vehicle type</h3>
            <hr className={css.line} />
            <div className={css.radioBtnsWrapper}>
              {formFilterIcons.map((item) => (
                <RadioButton
                  key={item.value}
                  name="type"
                  value={item.value}
                  iconId={item.iconId}
                  title={item.title}
                  fill={item.fill}
                />
              ))}
            </div>
          </div>
        </div>

        <Button variant="color" width="173px" type="submit">
          Show more
        </Button>
      </Form>
    </Formik>
  );
}
