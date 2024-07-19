import { InitialValues } from "@/constants/forms/addEmployeeForm";
import { additions, deductions } from "@/constants/salary-modifiers";
import { translations } from "@/localization";
import { AdditionObj, DeductionObj, Employee, Salary } from "@/types";
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

export const calculateTotalSalary = (
  basicSalary: number,
  additions: AdditionObj[],
  deductions: DeductionObj[]
): number => {
  let total: number = basicSalary;

  for (let index = 0; index < additions.length; index++) {
    const addition: AdditionObj = additions[index];
    total = total + addition.fixed + (total * addition.percentage) / 100;
  }

  for (let index = 0; index < deductions.length; index++) {
    const deduction: DeductionObj = deductions[index];
    total = total - deduction.fixed - (total * deduction.percentage) / 100;
  }

  return total;
};

export const prepareSalaries = (employees: Employee[]): Salary[] => {
  const arr: Salary[] = employees.map((employee) => {
    const salary: Salary = {
      ...employee,
      additions: [...additions.slice(1, (Math.random() * 6) % 6)],
      deductions: [...deductions.slice(1, (Math.random() * 6) % 6)],
      total: employee.basicSalary,
      payDate: null,
    };
    return salary;
  });

  return arr;
};
