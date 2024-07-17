import { Form, Formik, FormikHelpers } from "formik";
import React, { MutableRefObject, RefObject } from "react";
import TextField from "../forms/TextField";
import { translations } from "@/localization";
import {
  InitialValues,
  initialValues,
  validationsSchema,
} from "@/constants/forms/addEmployeeForm";
import { DatePickerField } from "../forms/DatePicker";
import FormControl from "../forms/FormControl";
import { AlertDialogFooter } from "../ui/alert-dialog";
import { Button } from "../ui/button";
import { MultiSelectField } from "../forms/MultiSelectField";
import { Allowances } from "@/types";
import { DialogFooter } from "../ui/dialog";

type Props = {
  setOpen: (val: boolean) => void;
};

const AddEmployeeForm = ({ setOpen }: Props) => {
  const handleSubmit = (
    values: InitialValues,
    helpers: FormikHelpers<InitialValues>
  ) => {
    helpers.setSubmitting(true);
    setTimeout(() => {
      alert(JSON.stringify(values));
      setOpen(false);
      helpers.setSubmitting(false);
    }, 2000);
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationsSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <Form>
          <FormControl>
            <TextField
              name="name"
              label={translations.EMPLOYEES_TABLE_NAME_FIELD}
              type="text"
              placeholder="Max Smith"
            />
          </FormControl>
          <FormControl>
            <TextField
              name="basicSalary"
              label={translations.EMPLOYEES_TABLE_JOINING_DATE_FIELD}
              type="number"
              placeholder="$"
            />
          </FormControl>
          <FormControl>
            <DatePickerField
              label={translations.EMPLOYEES_TABLE_BASIC_SALARY_FIELD}
              name="joiningDate"
            />
          </FormControl>
          <FormControl>
            <MultiSelectField
              name="allowances"
              label={translations.EMPLOYEES_TABLE_ALLOWANCES_FIELD}
              options={Object.keys(Allowances)
                .filter((key) => isNaN(Number(key)))
                .map((item) => ({
                  label: translations[item],
                  value: item,
                }))}
              // options={options}
            />
          </FormControl>
          <DialogFooter>
            <Button variant="outline" onClick={() => setOpen(false)}>
              Cancel
            </Button>
            <Button variant="default" type="submit" disabled={isSubmitting}>
              Add
            </Button>
          </DialogFooter>
        </Form>
      )}
    </Formik>
  );
};

export default AddEmployeeForm;
