"use client";

import { Checkbox } from "@/components/ui/checkbox";
import { useField, useFormikContext } from "formik";

type Props = {
  compact?: boolean;
  name: string;
  label: string;
};

export function CheckboxField({ name, compact, label }: Props) {
  const [field, meta, helpers] = useField(name);
  const { setFieldValue } = useFormikContext();

  return (
    <div className="flex items-center space-x-2">
      <Checkbox
        id={field.name}
        name={field.name}
        checked={field.value}
        onClick={(e) => {
          setFieldValue(field.name, !field.value);
        }}
        onBlur={field.onBlur}
      />
      {!compact && (
        <label
          htmlFor={field.name}
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          {label}
        </label>
      )}
      {meta.touched && meta.error ? (
        <div className="text-sm font-medium text-destructive ">
          {meta.error}
        </div>
      ) : null}
    </div>
  );
}
