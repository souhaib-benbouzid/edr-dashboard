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
import { Button } from "../ui/button";

type Props = {
  data: Employee;
  callback?: (open: boolean) => void;
};

export function EditEmployeeDialog({ data, callback }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <Dialog
      open={open}
      onOpenChange={(open) => {
        setOpen(open);
        callback && callback(open);
      }}
    >
      <DialogTrigger asChild>
        <Button
          variant="outline"
          className="w-full mb-2"
          onClick={() => setOpen(true)}
        >
          {translations.EDIT}
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{titlize(translations.EDIT_EMPLOYEE)}</DialogTitle>
          <DialogDescription>
            {translations.EDIT_EMPLOYEE_DESCRIPTION}
          </DialogDescription>
        </DialogHeader>
        <EditEmployeeDialogForm
          setOpen={(value: boolean) => {
            setOpen(value);
            callback && callback(value);
          }}
          data={data}
        />
      </DialogContent>
    </Dialog>
  );
}
