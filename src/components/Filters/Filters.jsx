import { Formik, Field, Form } from "formik";
import { useDispatch } from "react-redux";
import { CiLocationOn } from "react-icons/ci";
import { saveFilters } from "../../redux/filters/slice";
import Button from "../UI/Button/Button";
import FilterButton from "../UI/FilterButton/FilterButton";
import css from "./Filters.module.css";
import { formFilterIcons } from "./constants";
import { equipmentFilterIcons } from "./constants";
import filterObjectByTrueValues from "../../auxiliary/filterObjectByTrueValues";
import createFilters from "../../auxiliary/createFilters";

export default function Filters() {
  const dispatch = useDispatch();

  const handleSubmit = (values, form) => {
    const filtersObj = filterObjectByTrueValues(values);
    const filters = createFilters(filtersObj);
    dispatch(saveFilters(filters));
    form.resetForm();
  };

  return (
    <Formik
      initialValues={{
        location: "",
        kitchen: false,
        tv: false,
        automatic: false,
        airconditioner: false,
        shower: false,
        vehicle: "van",
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

          <h3 className={css.title}>Filters</h3>

          <div className={css.equipmentFilter}>
            <h3 className={css.equipmentfilterTitle}>Vehicle equipment</h3>
            <hr className={css.line} />

            <div className={css.checkBtsnWrapper}>
              {equipmentFilterIcons.map((item) => (
                <FilterButton
                  key={item.value}
                  name={item.name}
                  value={item.value}
                  iconId={item.iconId}
                  title={item.title}
                  fill={item.fill}
                  type="checkbox"
                />
              ))}
            </div>
          </div>

          <div className={css.vehiclefilter}>
            <h3 className={css.vehiclefilterTitle}>Vehicle type</h3>
            <hr className={css.line} />

            <div className={css.radioBtnsWrapper}>
              {formFilterIcons.map((item) => (
                <FilterButton
                  key={item.value}
                  name="vehicle"
                  value={item.value}
                  iconId={item.iconId}
                  title={item.title}
                  fill={item.fill}
                  type="radio"
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
