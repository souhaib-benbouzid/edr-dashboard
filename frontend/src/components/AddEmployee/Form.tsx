import { Form, Formik, FormikHelpers } from "formik";
import React, { useContext } from "react";
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
import { MultiSelectField, SelectOption } from "../forms/MultiSelectField";
import { Allowances } from "@/types";
import { DialogFooter } from "../ui/dialog";
import { prepareInitialData } from "@/lib/utils";
import { EmployeeContext, EmployeesContexts } from "@/Providers/employees";
import { allowances } from "@/constants/salary-modifiers";

type Props = {
  setOpen: (val: boolean) => void;
};

const AddEmployeeForm = ({ setOpen }: Props) => {
  const { addEmployee } = useContext(EmployeesContexts) as EmployeeContext;

  const handleSubmit = (
    values: InitialValues,
    helpers: FormikHelpers<InitialValues>
  ) => {
    helpers.setSubmitting(true);
    setTimeout(() => {
      setOpen(false);
      addEmployee(prepareInitialData(values));
      helpers.setSubmitting(false);
    }, 500);
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
              label={translations.EMPLOYEES_TABLE_BASIC_SALARY_FIELD}
              type="number"
              placeholder="$"
            />
          </FormControl>
          <FormControl>
            <DatePickerField
              label={translations.EMPLOYEES_TABLE_JOINING_DATE_FIELD}
              name="joiningDate"
            />
          </FormControl>
          <FormControl>
            <MultiSelectField
              name="allowances"
              label={translations.EMPLOYEES_TABLE_ALLOWANCES_FIELD}
              options={allowances}
            />
          </FormControl>
          <DialogFooter>
            <Button variant="outline" onClick={() => setOpen(false)}>
              {translations.CANCEL}
            </Button>
            <Button variant="default" type="submit" disabled={isSubmitting}>
              {translations.ADD}
            </Button>
          </DialogFooter>
        </Form>
      )}
    </Formik>
  );
};

export default AddEmployeeForm;
