"use client";
import { Column, TableData } from "@/components/Table/types";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { translations } from "@/localization";
import { MoreHorizontal } from "lucide-react";

export const useColumns = (): Column[] => {
  const handleEdit = (data: TableData) => {
    console.log(data);
  };
  const handleDelete = (data: TableData) => {
    console.log(data);
  };

  const columns: Column[] = [
    {
      field: "id",
      renderHeader: () => {
        return <>{translations.SALARIES_TABLE_STAFF_ID_FIELD}</>;
      },
    },
    {
      field: "name",
      renderHeader: () => {
        return <>{translations.SALARIES_TABLE_NAME_FIELD}</>;
      },
    },
    {
      field: "joiningDate",
      renderHeader: () => {
        return <>{translations.SALARIES_TABLE_JOINING_DATE_FIELD}</>;
      },
    },
    {
      field: "basicSalary",
      renderHeader: () => {
        return <>{translations.SALARIES_TABLE_BASIC_SALARY_FIELD}</>;
      },
    },
    {
      field: "allowance",
      renderHeader: () => {
        return <>{translations.SALARIES_TABLE_ALLOWANCES_FIELD}</>;
      },
    },
    {
      field: "addition",
      renderHeader: () => {
        return <>{translations.SALARIES_TABLE_ADDITIONS_FIELD}</>;
      },
    },
    {
      field: "deductions",
      renderHeader: () => {
        return <>{translations.SALARIES_TABLE_DEDUCTIONS_FIELD}</>;
      },
    },
    {
      field: "actions",
      renderHeader: () => {
        return <span className="sr-only">actions</span>;
      },
      render: (data) => {
        return (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button aria-haspopup="true" size="icon" variant="ghost">
                <MoreHorizontal className="h-4 w-4" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>
                {translations.SALARIES_TABLE_ACTIONS_LABEL}
              </DropdownMenuLabel>
              <DropdownMenuItem onClick={() => handleEdit(data)}>
                {translations.SALARIES_TABLE_EDIT_ACTION_LABEL}
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => handleDelete(data)}>
                {translations.SALARIES_TABLE_DELETE_ACTION_LABEL}
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        );
      },
    },
  ];

  return columns;
};
