import React, { useState } from "react";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { MoreHorizontal } from "lucide-react";
import { translations } from "@/localization";
import { Alert } from "../Alert";
import { EditEmployeeDialog } from "../EditEmployee/Dialog";
import { Employee } from "@/types";

type Props = {
  data: Employee;
};

const Actions = ({ data }: Props) => {
  const [open, setOpen] = useState(false);
  const handleDelete = () => {
    console.log(data);
  };

  return (
    <DropdownMenu open={open} onOpenChange={setOpen}>
      <DropdownMenuTrigger asChild>
        <Button aria-haspopup="true" size="icon" variant="ghost">
          <MoreHorizontal className="h-4 w-4" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel>Actions</DropdownMenuLabel>
        <DropdownMenuItem
          onSelect={(e) => {
            e.preventDefault();
          }}
        >
          <EditEmployeeDialog data={data} />
        </DropdownMenuItem>
        <DropdownMenuItem
          onSelect={(e) => {
            e.preventDefault();
          }}
        >
          <Alert
            title={translations.DELETE_EMPLOYEE}
            description={translations.DELETE_EMPLOYEE_DESCRIPTION}
            successText={translations.DELETE}
            onSuccess={() => {
              handleDelete();
              setOpen(false);
            }}
            onCancel={() => {
              setOpen(false);
            }}
            trigger={translations.DELETE}
            renderTrigger={() => (
              <div className="w-full cursor-pointer">{translations.DELETE}</div>
            )}
          />
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default Actions;
