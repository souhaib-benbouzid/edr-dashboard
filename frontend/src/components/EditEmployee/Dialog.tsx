import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { titlize } from "@/lib/utils";
import { translations } from "@/localization";
import { useState } from "react";
import EditEmployeeDialogForm from "./Form";
import { Employee } from "@/types";

type Props = {
  data: Employee;
};

export function EditEmployeeDialog({ data }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <div className="w-full cursor-pointer" onClick={() => setOpen(true)}>
          {translations.EDIT}
        </div>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{titlize(translations.EDIT_EMPLOYEE)}</DialogTitle>
          <DialogDescription>
            {translations.EDIT_EMPLOYEE_DESCRIPTION}
          </DialogDescription>
        </DialogHeader>
        <EditEmployeeDialogForm setOpen={setOpen} values={data} />
      </DialogContent>
    </Dialog>
  );
}
