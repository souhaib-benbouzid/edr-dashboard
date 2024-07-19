"use client";
import { Column, TableData } from "@/components/Table/types";
import { Badge } from "@/components/ui/badge";

import {
  additions,
  allowances,
  deductions,
} from "@/constants/salary-modifiers";
import { translations } from "@/localization";
import { Salary, TableFieldType } from "@/types";
import { format } from "date-fns";
import { DeductionFormField } from "../DeductionFormField";
import { SalaryFormFieldNames } from "@/constants/forms/salaryForm";
import { AdditionsFormField } from "../AdditionsFormField";
import TotalPayFormField from "../TotalPayFormField";

export const useColumns = (): Column[] => {
  const columns: Column[] = [
    {
      field: "id",
      renderHeader: () => {
        return (
          <div className="w-24">
            {translations.SALARIES_TABLE_STAFF_ID_FIELD}
          </div>
        );
      },
      fieldType: TableFieldType.TEXT,
      isNoneEditable: true,
    },
    {
      field: "name",
      renderHeader: () => {
        return (
          <div className="w-24">{translations.SALARIES_TABLE_NAME_FIELD}</div>
        );
      },
      fieldType: TableFieldType.TEXT,
      isNoneEditable: true,
    },
    {
      field: "basicSalary",
      renderHeader: () => {
        return (
          <div className="w-16">
            {translations.SALARIES_TABLE_BASIC_SALARY_FIELD}
          </div>
        );
      },
      fieldType: TableFieldType.NUMBER,
      isNoneEditable: true,
    },
    {
      field: "allowances",
      renderHeader: () => {
        return <div>{translations.SALARIES_TABLE_ALLOWANCES_FIELD}</div>;
      },
      render: (data) => {
        const salary = data as Salary;
        return (
          <div className="flex flex-wrap w-48">
            {salary.allowances.map((item, index) => (
              <Badge variant="secondary" className="m-1" key={index}>
                {item.label}
              </Badge>
            ))}
          </div>
        );
      },
      fieldType: TableFieldType.SELECT,
      options: allowances,
      isNoneEditable: true,
    },
    {
      field: "additions",
      renderHeader: () => {
        return <>{translations.SALARIES_TABLE_ADDITIONS_FIELD}</>;
      },
      render: (data) => {
        const salary = data as Salary;
        return (
          <div className="flex flex-wrap w-48">
            {salary.additions.map((item, index) => (
              <Badge variant="secondary" className="m-1" key={index}>
                {item.label}
              </Badge>
            ))}
          </div>
        );
      },
      fieldType: TableFieldType.CUSTOM,
      renderFormField: () => {
        return (
          <AdditionsFormField
            label={""}
            name={SalaryFormFieldNames.additions}
            options={additions}
            compact
          />
        );
      },
      options: additions,
    },
    {
      field: "deductions",
      renderHeader: () => {
        return <>{translations.SALARIES_TABLE_DEDUCTIONS_FIELD}</>;
      },
      render: (data) => {
        const salary = data as Salary;
        return (
          <div className="flex flex-wrap w-48">
            {salary.deductions.map((item, index) => (
              <Badge variant="secondary" className="m-1" key={index}>
                {item.label}
              </Badge>
            ))}
          </div>
        );
      },
      fieldType: TableFieldType.CUSTOM,
      options: deductions,
      renderFormField: () => {
        return (
          <DeductionFormField
            label={""}
            name={SalaryFormFieldNames.deductions}
            options={deductions}
            compact
          />
        );
      },
    },
    {
      field: "total",
      renderHeader: () => {
        return <div className="w-24">{translations.TOTAL}</div>;
      },
      render: (data) => {
        const salary = data as Salary;
        return <div className="flex flex-wrap">{salary.total}</div>;
      },
      fieldType: TableFieldType.CUSTOM,
      renderFormField: () => {
        return <TotalPayFormField name={SalaryFormFieldNames.total} />;
      },
    },
    {
      field: "payDate",
      renderHeader: () => {
        return (
          <div className="w-24">
            {translations.SALARIES_TABLE_PAY_DATE_FIELD}
          </div>
        );
      },
      render: (data) => {
        const salary = data as Salary;
        return (
          <div className="w-24">
            {salary.payDate ? format(salary.payDate, "PP") : ""}
          </div>
        );
      },
      fieldType: TableFieldType.DATE,
    },
  ];

  return columns;
};
