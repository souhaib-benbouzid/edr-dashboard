"use client";

import React, { useState } from "react";
import DynamicTable from "@/components/Table";
import data from "@/mocks/employees.json";
import { translations } from "@/localization";
import { useColumns } from "./hooks/useColumns";
import { Employee } from "@/types";

const EmployeesTable = () => {
  const columns = useColumns();
  const [employees, setEmployees] = useState<Employee[]>([...data]);
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
