import { InitialValues } from "@/constants/forms/addEmployeeForm";
import { translations } from "@/localization";
import { Employee } from "@/types";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function titlize(text: string): string {
  return text.toLowerCase().replaceAll(/(?:^|\s|-)\S/g, (x) => x.toUpperCase());
}

export const prepareEmployeeData = (employee: Employee): InitialValues => {
  const data = {
    ...employee,
    allowances: employee.allowances.map((item) => ({
      label: translations[item],
      value: item,
    })),
  };
  return data;
};

export const prepareInitialData = (values: InitialValues): Employee => {
  const data = {
    ...values,
    allowances: values.allowances.map((item) => item.value),
  } as Employee;
  return data;
};
