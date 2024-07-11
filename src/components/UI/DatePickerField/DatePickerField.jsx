import DatePicker from "react-datepicker";
import { useState } from "react";
import { registerLocale } from "react-datepicker";
import { FaRegCalendar } from "react-icons/fa";
import enGB from "date-fns/locale/en-GB";

import "react-datepicker/dist/react-datepicker.css";
import "./DatePickerField.css";

const customLocale = {
  ...enGB,
  localize: {
    ...enGB.localize,
    day: (n) => ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"][n],
  },
};
registerLocale("custom-en-GB", customLocale);

const DatePickerInput = ({ field, form, placeholder }) => {
  const [selectedDate, setSelectedDate] = useState(field.value);

  const handleDateChange = (date) => {
    setSelectedDate(date);
    form.setFieldValue(field.name, date);
  };

  return (
    <div className="datepicker__wrapper">
      <DatePicker
        className="datepicker"
        calendarClassName="datepicker__calendar"
        wrapperClassName="datepicker__wrapper"
        selected={selectedDate}
        onChange={handleDateChange}
        placeholderText={placeholder}
        showPopperArrow={false}
        locale="custom-en-GB"
        minDate={new Date()}
      />
      <FaRegCalendar className="datepicker__icon" />
    </div>
  );
};

export default DatePickerInput;
