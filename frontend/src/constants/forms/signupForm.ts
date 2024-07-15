import { translations } from "@/localization";
import * as Yup from "yup";

export type InitialValues = {
  fullName: string;
  email: string;
  password: string;
};

export const initialValues = {
  fullName: "",
  email: "",
  password: "",
};

export const validationsSchema = Yup.object({
  fullName: Yup.string()
    .min(3, translations.FULL_NAME_MIN_LENGTH_VALIDATION_ERROR)
    .max(20, translations.FULL_NAME_MAX_LENGTH_VALIDATION_ERROR)
    .required(translations.REQUIRED_FIELD),
  email: Yup.string()
    .email(translations.EMAIL_VALIDATION_ERROR)
    .required(translations.REQUIRED_FIELD),
  password: Yup.string().required(translations.REQUIRED_FIELD),
});
