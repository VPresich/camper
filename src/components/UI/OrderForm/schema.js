import * as Yup from "yup";

import {
  ERR_SHORT,
  ERR_LONG,
  ERR_REQUIRED,
  ERR_EMAIL,
  ERR_EMAIL_REQUIRED,
  ERR_DATE,
} from "./constants";

export const schema = Yup.object().shape({
  name: Yup.string().min(3, ERR_SHORT).max(50, ERR_LONG).required(ERR_REQUIRED),
  email: Yup.string().email(ERR_EMAIL).required(ERR_EMAIL_REQUIRED),
  date: Yup.date().required(ERR_REQUIRED).min(new Date(), ERR_DATE),
});
