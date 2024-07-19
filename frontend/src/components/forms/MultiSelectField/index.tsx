"use client";

import { MultiSelect } from "@/components/ui/extension/multi-select";
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
export function MultiSelectField({ options, label, name, compact }: Props) {
  const [field, meta, helpers] = useField(name);
  const handleChange = (value: SelectOption[]) => {
    helpers.setValue(value, true);
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
