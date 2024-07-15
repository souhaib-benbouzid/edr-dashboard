import React from "react";

import { TableBody, TableCell, TableRow } from "../ui/table";
import { Column, TableData } from "./types";
import { translations } from "@/localization";

type Props = {
  data: TableData[];
  columns: Column[];
};

const StyledTableBody = ({ data, columns }: Props) => {
  if (!data || data.length === 0) {
    return (
      <TableBody>
        <TableRow>{translations.TABLE_EMPTY_TABLE}</TableRow>
      </TableBody>
    );
  }

  return (
    <TableBody>
      {data.map((row) => (
        <TableRow key={row.id}>
          {columns.map((cell, index) => (
            <TableCell
              key={row.id + "-" + index}
              className={`
                ${cell.width && `w-[${cell.width}]`}
                ${cell.hideOnMobile && "hidden sm:table-cell"}
                ${cell.hideOnTablet && "hidden lg:table-cell"}
                `}
            >
              {cell.render ? cell.render(row) : row[cell.field]}
            </TableCell>
          ))}
        </TableRow>
      ))}
    </TableBody>
  );
};

export default StyledTableBody;
