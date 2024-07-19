export interface Employee {
  id: string;
  name: string;
  joiningDate: Date;
  basicSalary: number;
  allowances: string[];
}

export enum Allowances {
  HOUSE_RENT,
  CHILDREN_EDUCATION,
  CONVENANCE,
  HELPER_ASSISTANT,
  BOOKS_PERIODICALS,
  FOOD_COUPONS,
  LEAVE_TRAVEL_CONCESSION_ASSISTANCE,
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
}

export enum Deduction {
  INCOME_TAX,
  STATE_LOCAL_INCOME_TAX,
  HEALTH_INSURANCE,
  LIFE_INSURANCE_AND_DISABILITY_PLAN,
  RETIREMENT_PLAN,
}

export enum Addition {
  ANNUAL_BONUS,
  SIGN_ON_BONUS,
  PERFORMANCE_BONUS,
  HOLIDAY_BONUS,
}

export enum TableFieldType {
  TEXT = "TEXT",
  DATE = "DATE",
  SELECT = "SELECT",
  NUMBER = "NUMBER",
}
