import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Button } from "@/components/ui/button";
import { titlize } from "@/lib/utils";
import { translations } from "@/localization";
import { useState } from "react";
import AddEmployeeForm from "./Form";

export function AddEmployeeDialog() {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="default" onClick={() => setOpen(true)}>
          {translations.ADD_EMPLOYEE}
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{titlize(translations.ADD_EMPLOYEE)}</DialogTitle>
          <DialogDescription>
            {translations.ADD_EMPLOYEE_DESCRIPTION}
          </DialogDescription>
        </DialogHeader>
        <AddEmployeeForm setOpen={setOpen} />
      </DialogContent>
    </Dialog>
  );
}
