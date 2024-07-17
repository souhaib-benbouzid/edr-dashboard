"use client";

import { MultiSelect } from "@/components/ui/extension/multi-select";
import { useField, useFormikContext } from "formik";
import * as React from "react";

type SelectOption = {
  value: string;
  label: string;
};

type Props = {
  options: SelectOption[];
  label: string;
  name: string;
};
export function MultiSelectField({ options, label, name }: Props) {
  const [field, meta, helpers] = useField(name);
  const { setFieldValue } = useFormikContext();
  const handleChange = (value: SelectOption[]) => {
    helpers.setValue(value, true);
  };

  return (
    <>
      <MultiSelect
        value={field.value}
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
