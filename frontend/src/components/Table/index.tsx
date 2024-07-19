import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Column, TableData } from "./types";
import StyledTableHead from "./TableHead";
import StyledTableBody from "./TableBody";
import { Table } from "../ui/table";
import { ObjectSchema } from "yup";

export type TableProps = {
  id: string;
  title: string;
  description: string;
  data: TableData[];
  columns: Column[];
  onEdit?: (data: TableData) => void;
  validationSchema?: ObjectSchema<any>;
  showActions?: boolean;
};

const DynamicTable = ({
  id,
  title,
  description,
  columns,
  data,
  validationSchema,
  onEdit,
  showActions,
}: TableProps) => {
  const handleEdit = (data: TableData) => {
    onEdit && onEdit(data);
  };

  return (
    <Card id={id}>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <StyledTableHead columns={columns} />
          <StyledTableBody
            columns={columns}
            data={data}
            validationSchema={validationSchema}
            onEdit={handleEdit}
            showActions={showActions}
          />
        </Table>
      </CardContent>
    </Card>
  );
};

export default DynamicTable;
