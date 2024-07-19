import { translations } from "@/localization";
import {
  Deduction,
  Addition,
  DeductionObj,
  AdditionObj,
  AllowanceObj,
  Allowances,
} from "@/types";
import Chance from "chance";
export const randomPercentage = () => Chance().integer({ max: 20, min: 5 });
export const randomNumber = () => Chance().integer({ max: 5000, min: 100 });

export const additions: AdditionObj[] = [
  {
    label: translations.ANNUAL_BONUS,
    value: Addition.ANNUAL_BONUS,
    percentage: randomPercentage(),
    fixed: 0,
  },
  {
    value: Addition.HOLIDAY_BONUS,
    label: translations.HOLIDAY_BONUS,
    percentage: randomPercentage(),
    fixed: 0,
  },
  {
    value: Addition.PERFORMANCE_BONUS,
    label: translations.PERFORMANCE_BONUS,
    percentage: 0,
    fixed: randomNumber(),
  },
  {
    value: Addition.SIGN_ON_BONUS,
    label: translations.SIGN_ON_BONUS,
    percentage: 0,
    fixed: randomNumber(),
  },
];

export const deductions: DeductionObj[] = [
  {
    value: Deduction.HEALTH_INSURANCE,
    label: translations.HEALTH_INSURANCE,
    percentage: 0,
    fixed: randomNumber(),
  },
  {
    value: Deduction.INCOME_TAX,
    label: translations.INCOME_TAX,
    percentage: randomPercentage(),
    fixed: 0,
  },
  {
    value: Deduction.LIFE_INSURANCE_AND_DISABILITY_PLAN,
    label: translations.LIFE_INSURANCE_AND_DISABILITY_PLAN,
    percentage: randomPercentage(),
    fixed: 0,
  },
  {
    value: Deduction.RETIREMENT_PLAN,
    label: translations.RETIREMENT_PLAN,
    percentage: randomPercentage(),
    fixed: 0,
  },
  {
    value: Deduction.STATE_LOCAL_INCOME_TAX,
    label: translations.STATE_LOCAL_INCOME_TAX,
    percentage: 0,
    fixed: randomNumber(),
  },
];

export const allowances: AllowanceObj[] = [
  {
    label: translations.HOUSE_RENT,
    value: Allowances.HOUSE_RENT,
  },
  {
    label: translations.CHILDREN_EDUCATION,
    value: Allowances.CHILDREN_EDUCATION,
  },
  {
    label: translations.CONVENANCE,
    value: Allowances.CONVENANCE,
  },
  {
    label: translations.HELPER_ASSISTANT,
    value: Allowances.HELPER_ASSISTANT,
  },
  {
    label: translations.BOOKS_PERIODICALS,
    value: Allowances.BOOKS_PERIODICALS,
  },
  {
    label: translations.FOOD_COUPONS,
    value: Allowances.FOOD_COUPONS,
  },
  {
    label: translations.LEAVE_TRAVEL_CONCESSION_ASSISTANCE,
    value: Allowances.LEAVE_TRAVEL_CONCESSION_ASSISTANCE,
  },
];
