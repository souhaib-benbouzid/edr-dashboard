"use client";

import { MultiSelect } from "@/components/ui/extension/multi-select";
import { InitialValues } from "@/constants/forms/addEmployeeForm";
import { SalaryFormFieldNames } from "@/constants/forms/salaryForm";
import { calculateTotalSalary } from "@/lib/utils";
import { DeductionObj, Salary } from "@/types";
import { useField, useFormikContext } from "formik";
import * as React from "react";

export type SelectOption = {
  value: string;
  label: string;
};

export type Props = {
  compact?: boolean;
  options: SelectOption[];
  label: string;
  name: string;
};
export function DeductionFormField({ options, label, name, compact }: Props) {
  const [field, meta, helpers] = useField(name);
  const { setFieldValue, values } = useFormikContext<Salary>();
  const handleChange = (value: any[]) => {
    helpers.setValue(value, true);
    setFieldValue(
      SalaryFormFieldNames.total,
      calculateTotalSalary(values.basicSalary, values.additions, value)
    );
  };

  return (
    <>
      <MultiSelect
        compact={compact}
        values={field.value}
        name={field.name}
        onBlur={field.onBlur}
        onChange={handleChange}
        options={options}
        label={label}
      />
      {meta.touched && meta.error ? (
        <div className="text-sm font-medium text-destructive ">
          {meta.error}
        </div>
      ) : null}
    </>
  );
}
