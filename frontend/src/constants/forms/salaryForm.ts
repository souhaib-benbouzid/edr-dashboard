import { translations } from "@/localization";
import * as Yup from "yup";

const allowanceValidation = Yup.object({
  label: Yup.string().required(),
  value: Yup.string().required(),
});

const additionsValidation = Yup.object({
  label: Yup.string().required(),
  value: Yup.string().required(),
  percentage: Yup.number().required(),
  fixed: Yup.number().required(),
});

const deductionValidation = additionsValidation;

export const salaryValidationSchema = Yup.object({
  name: Yup.string()
    .min(3, translations.FULL_NAME_MIN_LENGTH_VALIDATION_ERROR)
    .max(40, translations.FULL_NAME_MAX_LENGTH_VALIDATION_ERROR)
    .required(translations.REQUIRED_FIELD),
  joiningDate: Yup.date().required(translations.REQUIRED_FIELD),
  basicSalary: Yup.number().required(translations.REQUIRED_FIELD),
  allowances: Yup.array().of(allowanceValidation),
  additions: Yup.array().of(additionsValidation),
  deductions: Yup.array().of(deductionValidation),
  total: Yup.number().required(translations.REQUIRED_FIELD),
  payDate: Yup.date().nullable(),
});

export enum SalaryFormFieldNames {
  name = "name",
  joiningDate = "joiningDate",
  basicSalary = "basicSalary",
  allowances = "allowances",
  additions = "additions",
  deductions = "deductions",
  total = "total",
  payDate = "payDate",
}
