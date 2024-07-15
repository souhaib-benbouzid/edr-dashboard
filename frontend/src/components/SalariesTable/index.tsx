"use client";

import React from "react";
import DynamicTable from "@/components/Table";
import employees from "@/mocks/employees.json";
import { translations } from "@/localization";
import { useColumns } from "./hooks/useColumns";

const SalariesTable = () => {
  const columns = useColumns();

  return (
    <DynamicTable
      id="salaries-table"
      title={translations.SALARIES_TABLE_TITLE}
      description={translations.SALARIES_TABLE_DESCRIPTION}
      data={employees}
      columns={columns}
    />
  );
};

export default SalariesTable;
