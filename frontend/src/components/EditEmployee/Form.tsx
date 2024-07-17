import { Form, Formik, FormikHelpers } from "formik";
import React from "react";
import TextField from "../forms/TextField";
import { translations } from "@/localization";
import {
  InitialValues,
  initialValues,
  validationsSchema,
} from "@/constants/forms/addEmployeeForm";
import { DatePickerField } from "../forms/DatePicker";
import FormControl from "../forms/FormControl";
import { Button } from "../ui/button";
import { MultiSelectField } from "../forms/MultiSelectField";
import { Allowances, Employee } from "@/types";
import { DialogFooter } from "../ui/dialog";

type Props = {
  setOpen: (val: boolean) => void;
  values: Employee;
};

const EditEmployeeForm = ({ setOpen, values }: Props) => {
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

  const mapEmployee = (employee: Employee): InitialValues => {
    return {
      ...employee,
      allowances: employee.allowances.map((item) => ({
        label: translations[item],
        value: item,
      })),
    };
  };

  return (
    <Formik
      initialValues={mapEmployee(values)}
      validationSchema={validationsSchema}
      onSubmit={handleSubmit}
      enableReinitialize
    >
      {({ isSubmitting, values }) => (
        <Form>
          <div>{JSON.stringify(values, null, 2)}</div>
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
            />
          </FormControl>
          <DialogFooter>
            <Button variant="outline" onClick={() => setOpen(false)}>
              {translations.CANCEL}
            </Button>
            <Button variant="default" type="submit" disabled={isSubmitting}>
              {translations.EDIT}
            </Button>
          </DialogFooter>
        </Form>
      )}
    </Formik>
  );
};

export default EditEmployeeForm;
