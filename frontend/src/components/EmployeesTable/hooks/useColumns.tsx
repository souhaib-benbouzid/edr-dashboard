"use client";
import { Column, TableData } from "@/components/Table/types";

import { translations } from "@/localization";
import { Badge } from "@/components/ui/badge";
import { Employee } from "@/types";
import Actions from "../Actions";
import { format } from "date-fns";
export const useColumns = (): Column[] => {
  const columns: Column[] = [
    {
      field: "id",
      renderHeader: () => {
        return <div>{translations.EMPLOYEES_TABLE_STAFF_ID_FIELD}</div>;
      },
    },
    {
      field: "name",
      renderHeader: () => {
        return <div>{translations.EMPLOYEES_TABLE_NAME_FIELD}</div>;
      },
    },
    {
      field: "joiningDate",
      renderHeader: () => {
        return <div>{translations.EMPLOYEES_TABLE_JOINING_DATE_FIELD}</div>;
      },
      render: (data) => {
        const employee = data as Employee;
        return <div>{format(employee.joiningDate, "PPP")}</div>;
      },
    },
    {
      field: "basicSalary",
      renderHeader: () => {
        return <div>{translations.EMPLOYEES_TABLE_BASIC_SALARY_FIELD}</div>;
      },
    },
    {
      field: "allowances",
      renderHeader: () => {
        return <div>{translations.EMPLOYEES_TABLE_ALLOWANCES_FIELD}</div>;
      },
      render: (data) => {
        const employee = data as Employee;
        return (
          <div className="flex flex-wrap w-96">
            {employee.allowances.map((item, index) => (
              <Badge variant="secondary" className="m-1" key={index}>
                {translations[item]}
              </Badge>
            ))}
          </div>
        );
      },
    },
    {
      field: "actions",
      renderHeader: () => <span className="sr-only">actions</span>,
      render: (data) => {
        const employee = data as Employee;
        return <Actions data={employee} />;
      },
    },
  ];

  return columns;
};
