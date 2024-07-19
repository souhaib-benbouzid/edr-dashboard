export interface Employee {
  id: string;
  name: string;
  joiningDate: Date;
  basicSalary: number;
  allowances: {
    label: string;
    value: string;
  }[];
}

export enum Allowances {
  HOUSE_RENT = "HOUSE_RENT",
  CHILDREN_EDUCATION = "CHILDREN_EDUCATION",
  CONVENANCE = "CONVENANCE",
  HELPER_ASSISTANT = "HELPER_ASSISTANT",
  BOOKS_PERIODICALS = "BOOKS_PERIODICALS",
  FOOD_COUPONS = "FOOD_COUPONS",
  LEAVE_TRAVEL_CONCESSION_ASSISTANCE = "LEAVE_TRAVEL_CONCESSION_ASSISTANCE",
}

export type AllowanceObj = {
  label: string;
  value: Allowances;
};

export type AdditionObj = {
  label: string;
  value: Addition;
  percentage: number;
  fixed: number;
};

export type DeductionObj = {
  label: string;
  value: Deduction;
  percentage: number;
  fixed: number;
};

export interface Salary extends Employee {
  additions: AdditionObj[];
  deductions: DeductionObj[];
  total: number;
  payDate: Date | null;
  gratuity: boolean;
}

export enum Deduction {
  INCOME_TAX = "INCOME_TAX",
  STATE_LOCAL_INCOME_TAX = "STATE_LOCAL_INCOME_TAX",
  HEALTH_INSURANCE = "HEALTH_INSURANCE",
  LIFE_INSURANCE_AND_DISABILITY_PLAN = "LIFE_INSURANCE_AND_DISABILITY_PLAN",
  RETIREMENT_PLAN = "RETIREMENT_PLAN",
}

export enum Addition {
  ANNUAL_BONUS = "ANNUAL_BONUS",
  SIGN_ON_BONUS = "SIGN_ON_BONUS",
  PERFORMANCE_BONUS = "PERFORMANCE_BONUS",
  HOLIDAY_BONUS = "HOLIDAY_BONUS",
}

export enum TableFieldType {
  TEXT = "TEXT",
  DATE = "DATE",
  SELECT = "SELECT",
  NUMBER = "NUMBER",
  CUSTOM = "CUSTOM",
  NONE = "NONE",
  CHECKBOX = "CHECKBOX",
}

export type PaymentLog = {
  id: string;
  time: Date;
  salaries: Salary[];
};
