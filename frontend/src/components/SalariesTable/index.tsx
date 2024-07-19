"use client";

import React, { useContext } from "react";
import DynamicTable from "@/components/Table";
import { translations } from "@/localization";
import { useColumns } from "./hooks/useColumns";
import { SalaryProcessingContext, SalaryContext } from "@/Providers/salaries";
import { salaryValidationSchema } from "@/constants/forms/salaryForm";

const SalariesTable = () => {
  const columns = useColumns();
  const { salaries, updateSalary } = useContext(
    SalaryProcessingContext
  ) as SalaryContext;

  const handleEdit = (data: any) => {
    updateSalary(data.id, data);
  };

  return (
    <DynamicTable
      id="salaries-table"
      title={translations.SALARIES_TABLE_TITLE}
      description={translations.SALARIES_TABLE_DESCRIPTION}
      data={salaries}
      columns={columns}
      onEdit={handleEdit}
      validationSchema={salaryValidationSchema}
      showActions={true}
    />
  );
};

export default SalariesTable;
