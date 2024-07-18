import { v4 } from "uuid";
import chance from "chance";
import { Allowances, Employee } from "@/types";

export const createNEmployees = (n: number): Employee[] => {
  const arr: Employee[] = [];
  const allowances = Object.values(Allowances).filter((val) =>
    isNaN(Number(val))
  ) as string[];

  for (let index = 0; index < n; index++) {
    arr.push({
      id: v4(),
      allowances: [...allowances.slice(1, (Math.random() * 6) % 6)],
      basicSalary: chance().integer({ max: 5000, min: 1000 }),
      joiningDate: chance().date(),
      name: chance().name({ full: true }),
    });
  }

  return arr;
};
