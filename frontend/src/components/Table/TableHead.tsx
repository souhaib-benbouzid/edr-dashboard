import React from "react";
import { Column } from "./types";
import { TableHeader, TableHead, TableRow } from "@/components/ui/table";

type Props = {
  columns: Column[];
};

const StyledTableHead = ({ columns }: Props) => (
  <TableHeader>
    <TableRow>
      {columns.map((cell, index) => (
        <TableHead
          key={index}
          className={`
              ${cell.width && `w-[${cell.width}]`}
              ${cell.hideOnMobile && "hidden sm:table-cell"}
              ${cell.hideOnTablet && "hidden lg:table-cell"}
              `}
        >
          {cell.renderHeader ? cell.renderHeader() : cell.field}
        </TableHead>
      ))}
    </TableRow>
  </TableHeader>
);

export default StyledTableHead;
