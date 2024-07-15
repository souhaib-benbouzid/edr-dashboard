import { translations } from "@/localization";
import * as Yup from "yup";

export type InitialValues = {
  email: string;
  password: string;
};

export const initialValues = {
  email: "",
  password: "",
};

export const validationsSchema = Yup.object({
  email: Yup.string()
    .email(translations.EMAIL_VALIDATION_ERROR)
    .required(translations.REQUIRED_FIELD),
  password: Yup.string().required(translations.REQUIRED_FIELD),
});
