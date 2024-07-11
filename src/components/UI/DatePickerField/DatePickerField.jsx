import DatePicker from "react-datepicker";
import { useState, useEffect, useRef } from "react";
import { registerLocale } from "react-datepicker";
import { FaRegCalendar } from "react-icons/fa";
import enGB from "date-fns/locale/en-GB";
import { format } from "date-fns";

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

const DatePickerInput = ({ field, form }) => {
  const [selectedDate, setSelectedDate] = useState(field.value);
  const datePickerRef = useRef(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
    const formattedDate = format(date, "yyyy/MM/dd");
    form.setFieldValue(field.name, formattedDate);
  };

  useEffect(() => {
    setSelectedDate(field.value);
  }, [field.value]);

  const handleIconClick = () => {
    if (datePickerRef.current) {
      datePickerRef.current.setOpen(true);
    }
  };

  return (
    <div className="datepicker__wrapper">
      <DatePicker
        ref={datePickerRef}
        className="datepicker"
        calendarClassName="datepicker__calendar"
        wrapperClassName="datepicker__wrapper"
        selected={selectedDate}
        onChange={handleDateChange}
        placeholderText="Booking date"
        showPopperArrow={false}
        locale="custom-en-GB"
        minDate={new Date()}
      />
      <FaRegCalendar className="datepicker__icon" onClick={handleIconClick} />
    </div>
  );
};

export default DatePickerInput;
