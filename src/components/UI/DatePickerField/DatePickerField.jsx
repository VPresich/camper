import DatePicker from "react-datepicker";
import clsx from "clsx";
import { useState } from "react";
import { FaRegCalendar } from "react-icons/fa";
import "react-datepicker/dist/react-datepicker.css";
import css from "./DatePickerField.module.css";

const DatePickerField = ({ field, form, placeholder, className, ...props }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openCalendar = () => {
    setIsOpen(true);
  };

  const closeCalendar = () => {
    setIsOpen(false);
  };

  return (
    <div className={css.datePickerWrapper}>
      <DatePicker
        selected={field.value}
        onChange={(date) => {
          form.setFieldValue(field.name, date);
          closeCalendar();
        }}
        dateFormat="yyyy/MM/dd"
        className={clsx(className)}
        placeholderText={placeholder}
        open={isOpen}
        onClickOutside={closeCalendar}
        {...props}
      />
      <FaRegCalendar className={css.calendarIcon} onClick={openCalendar} />
    </div>
  );
};

export default DatePickerField;
