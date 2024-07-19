import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useField } from "formik";
import React from "react";

type Props = {
  name: string;
};

const TotalPayFormField = ({ name }: Props) => {
  const [field, meta, helpers] = useField(name);

  return (
    <div>
      <div className="my-2" id={name}>
        {field.value.toFixed(2)}
      </div>
      {meta.touched && meta.error ? (
        <div className="text-sm font-medium text-destructive">{meta.error}</div>
      ) : null}
    </div>
  );
};

export default TotalPayFormField;
