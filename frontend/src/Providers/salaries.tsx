"use client";
import React, { createContext, useContext, useState } from "react";
import { EmployeeContext, EmployeesContexts } from "./employees";
import { Salary } from "@/types";
import { prepareSalaries } from "@/lib/utils";

export interface SalaryContext {
  salaries: Salary[];
  updateSalary: (id: string, data: Partial<Salary>) => void;
}

export const SalaryProcessingContext = createContext<SalaryContext | null>(
  null
);

interface Props {
  children: React.ReactNode;
}

const SalariesProvider = ({ children }: Props) => {
  const { employees } = useContext(EmployeesContexts) as EmployeeContext;
  const [salaries, setSalaries] = useState(prepareSalaries(employees));

  const updateSalary: SalaryContext["updateSalary"] = (id, data) => {
    const salaryIndex = salaries.findIndex((item) => item.id === id);
    if (salaryIndex === -1) {
      throw new Error("salary not found");
    }
    const updatedSalary: Salary = {
      ...salaries[salaryIndex],
      ...data,
    };
    salaries[salaryIndex] = updatedSalary;
    const updatedList = [...salaries];
    setSalaries(updatedList);
  };

  return (
    <SalaryProcessingContext.Provider
      value={{
        salaries,
        updateSalary,
      }}
    >
      {children}
    </SalaryProcessingContext.Provider>
  );
};

export default SalariesProvider;
