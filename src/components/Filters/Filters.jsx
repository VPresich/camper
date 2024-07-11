import { Formik, Form } from "formik";
import CustomField from "../UI/CustomField/CustomField";
import { useDispatch } from "react-redux";
import { saveQueryParams } from "../../redux/filters/slice";
import Button from "../UI/Button/Button";
import FilterButton from "../UI/FilterButton/FilterButton";
import RadioButton from "../UI/RadioButton/RadioButton";

import { resetStore } from "../../redux/campers/slice";
import { formFilterIcons } from "./constants";
import { equipmentFilterIcons } from "./constants";
import ParamsTrueValues from "../../auxiliary/ParamsTrueValues";
import { createQueryParams } from "../../auxiliary/createFilters";

import css from "./Filters.module.css";

export default function Filters() {
  const dispatch = useDispatch();

  const handleSubmit = (values) => {
    const filtersObj = ParamsTrueValues(values);
    const queryParams = createQueryParams(filtersObj);
    dispatch(resetStore());
    dispatch(saveQueryParams(queryParams));
  };

  return (
    <Formik
      initialValues={{
        location: "",
        kitchen: false,
        tv: false,
        automatic: false,
        airConditioner: false,
        shower: false,
        vehicle: "van",
      }}
      onSubmit={handleSubmit}
    >
      <Form className={css.form}>
        <div className={css.filterControls}>
          <CustomField
            label="Location"
            name="location"
            placeholder="Kyiv, Ukraine"
          />
          <p className={css.title}>Filters</p>
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
                <RadioButton
                  key={item.value}
                  name="vehicle"
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
          Search
        </Button>
      </Form>
    </Formik>
  );
}
