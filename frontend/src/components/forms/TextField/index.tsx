import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useField } from "formik";
import React from "react";

type Props = {
  compact?: boolean;
  name: string;
  label: string;
  type: string;
  placeholder?: string;
  required?: boolean;
};

const TextField = ({ label, name, compact, ...props }: Props) => {
  const [field, meta, helpers] = useField(name);

  return (
    <div>
      {!compact && <Label htmlFor={name}>{label}</Label>}
      <Input className="my-2" id={name} {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className="text-sm font-medium text-destructive ">
          {meta.error}
        </div>
      ) : null}
    </div>
  );
};

export default TextField;
