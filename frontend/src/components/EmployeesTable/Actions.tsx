import React, { useContext, useState } from "react";
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
import { EmployeeContext, EmployeesContexts } from "@/Providers/employees";

type Props = {
  data: Employee;
};

const Actions = ({ data }: Props) => {
  const [open, setOpen] = useState(false);
  const { deleteEmployee } = useContext(EmployeesContexts) as EmployeeContext;

  return (
    <DropdownMenu open={open} onOpenChange={setOpen}>
      <DropdownMenuTrigger asChild>
        <Button aria-haspopup="true" size="icon" variant="ghost">
          <MoreHorizontal className="h-4 w-4" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel className="text-center">Actions</DropdownMenuLabel>
        <DropdownMenuItem asChild>
          <EditEmployeeDialog data={data} callback={(open) => setOpen(open)} />
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Alert
            title={translations.DELETE_EMPLOYEE}
            description={translations.DELETE_EMPLOYEE_DESCRIPTION}
            successText={translations.DELETE}
            onSuccess={() => {
              deleteEmployee(data.id);
              setOpen(false);
            }}
            onCancel={() => {
              setOpen(false);
            }}
            trigger={translations.DELETE}
            renderTrigger={() => (
              <Button variant="destructive" className="w-full">
                {translations.DELETE}
              </Button>
            )}
          />
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default Actions;
