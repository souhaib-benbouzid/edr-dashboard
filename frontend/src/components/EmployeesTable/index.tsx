"use client";

import React, { useContext } from "react";
import DynamicTable from "@/components/Table";
import { translations } from "@/localization";
import { useColumns } from "./hooks/useColumns";
import { EmployeeContext, EmployeesContexts } from "@/Providers/employees";

const EmployeesTable = () => {
  const columns = useColumns();
  const { employees } = useContext(EmployeesContexts) as EmployeeContext;

  return (
    <DynamicTable
      id="employees-table"
      title={translations.EMPLOYEES_TABLE_TITLE}
      description={translations.EMPLOYEES_TABLE_DESCRIPTION}
      data={employees}
      columns={columns}
    />
  );
};

export default EmployeesTable;
