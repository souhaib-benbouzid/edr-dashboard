"use client";
import { Column } from "@/components/Table/types";

import { translations } from "@/localization";
import { Badge } from "@/components/ui/badge";
import { Employee, TableFieldType } from "@/types";
import Actions from "../Actions";
import { format } from "date-fns";
import { allowances } from "@/constants/salary-modifiers";
export const useColumns = (): Column[] => {
  const columns: Column[] = [
    {
      field: "id",
      renderHeader: () => {
        return <div>{translations.EMPLOYEES_TABLE_STAFF_ID_FIELD}</div>;
      },
      fieldType: TableFieldType.TEXT,
    },
    {
      field: "name",
      renderHeader: () => {
        return <div>{translations.EMPLOYEES_TABLE_NAME_FIELD}</div>;
      },
      fieldType: TableFieldType.TEXT,
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
      fieldType: TableFieldType.DATE,
    },
    {
      field: "basicSalary",
      renderHeader: () => {
        return <div>{translations.EMPLOYEES_TABLE_BASIC_SALARY_FIELD}</div>;
      },
      fieldType: TableFieldType.NUMBER,
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
                {item.label}
              </Badge>
            ))}
          </div>
        );
      },
      fieldType: TableFieldType.SELECT,
      options: allowances,
    },
    {
      field: "actions",
      renderHeader: () => <span className="sr-only">actions</span>,
      render: (data) => {
        const employee = data as Employee;
        return <Actions data={employee} />;
      },
      fieldType: TableFieldType.NONE,
      isNoneEditable: true,
    },
  ];

  return columns;
};
