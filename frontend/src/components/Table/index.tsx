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

export type TableProps = {
  id: string;
  title: string;
  description: string;
  data: TableData[];
  columns: Column[];
};

const DynamicTable = ({
  id,
  title,
  description,
  columns,
  data,
}: TableProps) => {
  return (
    <Card id={id}>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <StyledTableHead columns={columns} />
        <StyledTableBody columns={columns} data={data} />
      </CardContent>
    </Card>
  );
};

export default DynamicTable;
