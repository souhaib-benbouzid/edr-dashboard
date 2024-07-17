import { translations } from "@/localization";
import { Allowances } from "@/types";
import * as Yup from "yup";

export type InitialValues = {
  name: string;
  joiningDate: Date | null;
  basicSalary: number | null;
  allowances: { label: string; value: string }[];
};

export const initialValues: InitialValues = {
  name: "",
  joiningDate: null,
  basicSalary: null,
  allowances: [],
};

export const validationsSchema = Yup.object({
  name: Yup.string()
    .min(3, translations.FULL_NAME_MIN_LENGTH_VALIDATION_ERROR)
    .max(40, translations.FULL_NAME_MAX_LENGTH_VALIDATION_ERROR)
    .required(translations.REQUIRED_FIELD),
  joiningDate: Yup.date().required(translations.REQUIRED_FIELD),
  basicSalary: Yup.number().required(translations.REQUIRED_FIELD),
  allowances: Yup.array().of(
    Yup.object().shape({
      label: Yup.string().required(),
      value: Yup.mixed().oneOf(Object.values(Allowances)).required(),
    })
  ),
});
