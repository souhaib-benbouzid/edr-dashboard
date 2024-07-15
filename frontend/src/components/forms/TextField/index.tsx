import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useField } from "formik";
import React from "react";

type Props = {
  name: string;
  label: string;
  type: string;
  placeholder?: string;
  required?: boolean;
};

const TextField = ({ label, name, ...props }: Props) => {
  const [field, meta, helpers] = useField(name);

  return (
    <>
      <Label htmlFor={name}>{label}</Label>
      <Input id={name} {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className="text-sm font-medium text-destructive ">
          {meta.error}
        </div>
      ) : null}
    </>
  );
};

export default TextField;
