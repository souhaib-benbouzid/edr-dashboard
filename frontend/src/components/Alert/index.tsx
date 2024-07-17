"use client";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { translations } from "@/localization";
import { useState } from "react";

type Props = {
  trigger: string;
  title: string;
  description: string;
  renderTrigger?: () => React.ReactNode;
  onSuccess?: () => void;
  onCancel?: () => void;
  cancelText?: string;
  successText?: string;
};

export function Alert({
  trigger,
  renderTrigger,
  title,
  description,
  cancelText,
  onCancel,
  onSuccess,
  successText,
}: Props) {
  const [open, setOpen] = useState(false);

  return (
    <AlertDialog open={open} onOpenChange={setOpen}>
      <AlertDialogTrigger asChild>
        {renderTrigger ? (
          renderTrigger()
        ) : (
          <Button variant="outline" type="button">
            {trigger}
          </Button>
        )}
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>{title}</AlertDialogTitle>
          <AlertDialogDescription>{description}</AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel
            onClick={() => {
              onCancel && onCancel();
              setOpen(false);
            }}
          >
            {cancelText ? cancelText : translations.CANCEL}
          </AlertDialogCancel>
          <AlertDialogAction
            onClick={() => {
              onSuccess && onSuccess();
              setOpen(false);
            }}
          >
            {successText ? successText : translations.CONTINUE}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
