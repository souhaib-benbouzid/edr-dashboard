"use client";
import React from "react";

import { TableBody } from "../ui/table";
import { Column, TableData } from "./types";
import { translations } from "@/localization";
import { ObjectSchema } from "yup";

import StyledTableRow from "./TableRow";

type Props = {
  data: TableData[];
  columns: Column[];
  isEditMode?: boolean;
  validationSchema?: ObjectSchema<any>;
  onEdit: (data: TableData) => void;
  showActions?: boolean;
};

const StyledTableBody = ({
  data,
  columns,
  validationSchema,
  onEdit,
  showActions,
}: Props) => {
  if (!data || data.length === 0) {
    return (
      <TableBody className="w-full">
        <div className="text-center w-full">
          {translations.TABLE_EMPTY_TABLE}
        </div>
      </TableBody>
    );
  }

  return (
    <TableBody>
      {data.map((row, key) => (
        <StyledTableRow
          key={row.id + "-row-" + key}
          columns={columns}
          data={row}
          onEdit={onEdit}
          showActions={showActions}
          validationSchema={validationSchema}
        />
      ))}
    </TableBody>
  );
};

export default StyledTableBody;
