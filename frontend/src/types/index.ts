export type Employee = {
  id: string;
  name: string;
  joiningDate: Date;
  basicSalary: number;
  allowances: string[];
};

export enum Allowances {
  HOUSE_RENT,
  CHILDREN_EDUCATION,
  CONVENANCE,
  HELPER_ASSISTANT,
  BOOKS_PERIODICALS,
  FOOD_COUPONS,
  LEAVE_TRAVEL_CONCESSION_ASSISTANCE,
}
