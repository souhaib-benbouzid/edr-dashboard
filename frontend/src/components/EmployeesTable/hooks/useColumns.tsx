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
import { Badge } from "@/components/ui/badge";
import { Employee } from "@/types";

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
        return <>{translations.EMPLOYEES_TABLE_STAFF_ID_FIELD}</>;
      },
    },
    {
      field: "name",
      renderHeader: () => {
        return <>{translations.EMPLOYEES_TABLE_NAME_FIELD}</>;
      },
    },
    {
      field: "joiningDate",
      renderHeader: () => {
        return <>{translations.EMPLOYEES_TABLE_JOINING_DATE_FIELD}</>;
      },
    },
    {
      field: "basicSalary",
      renderHeader: () => {
        return <>{translations.EMPLOYEES_TABLE_BASIC_SALARY_FIELD}</>;
      },
    },
    {
      field: "allowances",
      renderHeader: () => {
        return <>{translations.EMPLOYEES_TABLE_ALLOWANCES_FIELD}</>;
      },
      render: (data) => {
        const employee = data as Employee;
        return (
          <div className="flex flex-wrap w-96">
            {employee.allowances.map((item, index) => (
              <Badge variant="secondary" className="m-1" key={index}>
                {item}
              </Badge>
            ))}
          </div>
        );
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
              <DropdownMenuLabel>Actions</DropdownMenuLabel>
              <DropdownMenuItem onClick={() => handleEdit(data)}>
                Edit
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => handleDelete(data)}>
                Delete
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        );
      },
    },
  ];

  return columns;
};
