"use client";

import React from "react";
import DynamicTable from "@/components/Table";
import employees from "@/mocks/employees.json";
import { translations } from "@/localization";
import { useColumns } from "./hooks/useColumns";

const EmployeesTable = () => {
  const columns = useColumns();

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
