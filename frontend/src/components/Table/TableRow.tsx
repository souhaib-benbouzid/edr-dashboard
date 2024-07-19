import React, { useState } from "react";
import { Column, TableData } from "./types";
import { ObjectSchema } from "yup";
import { Form, Formik } from "formik";
import { TableCell, TableRow } from "../ui/table";
import { DatePickerField } from "../forms/DatePicker";
import TextField from "../forms/TextField";
import { MultiSelectField } from "../forms/MultiSelectField";
import { TableFieldType } from "@/types";
import TableActions from "./TableActions";
import { X, CheckCircle } from "lucide-react";
import { Button } from "../ui/button";
import { CheckboxField } from "../forms/CheckboxField";

type Props = {
  data: TableData;
  columns: Column[];
  validationSchema?: ObjectSchema<any>;
  onEdit: (data: TableData) => void;
  showActions?: boolean;
};

const StyledTableRow = ({
  columns,
  data,
  onEdit,
  validationSchema,
  showActions,
}: Props) => {
  const [isEditMode, setIsEditMode] = useState(false);
  const handleEdit = () => {
    setIsEditMode(!isEditMode);
  };

  const handleSubmit = (values: any) => {
    onEdit(values);
  };

  return (
    <Formik
      initialValues={data}
      onSubmit={handleSubmit}
      enableReinitialize
      validationSchema={validationSchema}
    >
      {({ isValid, submitForm, errors, values }) => {
        if (!isEditMode) {
          return (
            <TableRow>
              {columns.map((cell, index) => (
                <TableCell
                  key={data.id + "-" + index}
                  className={`
                          ${cell.width && `w-[${cell.width}]`}
                          ${cell.hideOnMobile && "hidden sm:table-cell"}
                          ${cell.hideOnTablet && "hidden lg:table-cell"}
                          `}
                >
                  {cell.render ? cell.render(data) : data[cell.field]}
                </TableCell>
              ))}
              {showActions && (
                <TableCell>
                  <TableActions handleEdit={handleEdit} />
                </TableCell>
              )}
            </TableRow>
          );
        }

        return (
          <TableRow>
            {/* <pre>{JSON.stringify({ errors, values }, null, 2)}</pre> */}
            {columns.map((cell, index) => {
              if (cell.isNoneEditable) {
                return (
                  <TableCell
                    key={index}
                    className={` pb-48 ${cell.width && `w-[${cell.width}]`} ${
                      cell.hideOnMobile && "hidden sm:table-cell"
                    } ${cell.hideOnTablet && "hidden lg:table-cell"}`}
                  >
                    {cell.render ? cell.render(data) : data[cell.field]}
                  </TableCell>
                );
              }

              return (
                <TableCell
                  key={index}
                  className={` pb-48 ${cell.width && `w-[${cell.width}]`} ${
                    cell.hideOnMobile && "hidden sm:table-cell"
                  } ${cell.hideOnTablet && "hidden lg:table-cell"}`}
                >
                  {cell.fieldType === TableFieldType.DATE && (
                    <DatePickerField
                      label={cell.field}
                      name={cell.field}
                      compact
                    />
                  )}
                  {cell.fieldType === TableFieldType.NUMBER && (
                    <TextField
                      label={cell.field}
                      name={cell.field}
                      type="number"
                      required
                      key={index}
                      compact
                    />
                  )}
                  {cell.fieldType === TableFieldType.SELECT && (
                    <MultiSelectField
                      compact
                      options={cell.options ? cell.options : []}
                      label={cell.field}
                      name={cell.field}
                    />
                  )}
                  {cell.fieldType === TableFieldType.TEXT && (
                    <TextField
                      compact
                      label={cell.field}
                      name={cell.field}
                      placeholder="test"
                      type="number"
                      required
                      key={index}
                    />
                  )}
                  {cell.fieldType === TableFieldType.CUSTOM &&
                    cell.renderFormField &&
                    cell.renderFormField(data)}

                  {cell.fieldType === TableFieldType.CHECKBOX && (
                    <CheckboxField
                      label={cell.field}
                      name={cell.field}
                      compact
                    />
                  )}
                </TableCell>
              );
            })}
            {showActions && (
              <TableCell className="flex items-center">
                <Button
                  aria-haspopup="true"
                  size="icon"
                  variant="destructive"
                  type="button"
                  className="mr-2"
                  onClick={handleEdit}
                >
                  <X className="h-4 w-4" />
                  <span className="sr-only">cancel</span>
                </Button>
                <Button
                  aria-haspopup="true"
                  size="icon"
                  variant="default"
                  type="submit"
                  disabled={!isValid}
                  onClick={() => {
                    submitForm();
                    handleEdit();
                  }}
                >
                  <CheckCircle className="h-4 w-4" />
                  <span className="sr-only">save</span>
                </Button>
              </TableCell>
            )}
          </TableRow>
        );
      }}
    </Formik>
  );
};

export default StyledTableRow;
