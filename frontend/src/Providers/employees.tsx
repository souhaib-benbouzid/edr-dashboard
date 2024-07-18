"use client";
import { useAsyncStorage } from "@/lib/asyncStorage";
import { Employee } from "@/types";
import { createContext, useCallback, useEffect, useState } from "react";
import { v4 } from "uuid";

const EMPLOYEES_KEY = "employees";

interface Props {
  children: React.ReactNode;
}

export interface EmployeeContext {
  employees: Employee[];
  addEmployee: (data: Omit<Employee, "id">) => void;
  updateEmployee: (id: string, data: Partial<Employee>) => void;
  deleteEmployee: (id: string) => void;
}

export const EmployeesContexts = createContext<EmployeeContext | null>(null);

const useInitialState = () => {
  const { getItem } = useAsyncStorage();
  const data = getItem(EMPLOYEES_KEY);
  return data ? data : [];
};
export const EmployeesProvider = ({ children }: Props) => {
  const [employees, setEmployees] = useState<Employee[]>(useInitialState());
  const { setItem } = useAsyncStorage();

  const persist = useCallback(
    (data: Employee[]) => {
      setItem(EMPLOYEES_KEY, data);
    },
    [setItem]
  );

  const addEmployee: EmployeeContext["addEmployee"] = (data) => {
    const newEmployee: Employee = {
      id: v4(),
      ...data,
    };
    const updatedList = [...employees, newEmployee];
    setEmployees(updatedList);
    persist(updatedList);
  };

  const updateEmployee: EmployeeContext["updateEmployee"] = (id, data) => {
    const employeeIndex = employees.findIndex((item) => item.id === id);
    if (employeeIndex === -1) {
      throw new Error("employee not found");
    }
    const updatedEmployee: Employee = {
      ...employees[employeeIndex],
      ...data,
    };
    employees[employeeIndex] = updatedEmployee;
    const updatedList = [...employees];
    setEmployees(updatedList);
    persist(updatedList);
  };

  const deleteEmployee: EmployeeContext["deleteEmployee"] = (id) => {
    const employeeIndex = employees.findIndex((item) => item.id === id);
    if (employeeIndex === -1) {
      throw new Error("employee not found");
    }

    const updatedList = employees.filter((item) => item.id !== id);

    setEmployees([...updatedList]);
  };

  useEffect(() => {
    persist(employees);
  }, [employees, persist]);

  return (
    <EmployeesContexts.Provider
      value={{
        employees,
        addEmployee,
        updateEmployee,
        deleteEmployee,
      }}
    >
      {children}
    </EmployeesContexts.Provider>
  );
};
