"use client";

import * as React from "react";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Label } from "@/components/ui/label";
import { translations } from "@/localization";
import { useField, useFormikContext } from "formik";

interface Props {
  compact?: boolean;
  name: string;
  label: string;
}

export function DatePickerField({ label, name, compact }: Props) {
  const { setFieldValue } = useFormikContext();
  const [field, meta] = useField(name);

  return (
    <Popover>
      <PopoverTrigger asChild>
        <div className="flex flex-col space-y-2">
          {!compact && <Label htmlFor={name}>{label}</Label>}
          <Button
            variant={"outline"}
            type="button"
            className={cn(
              "justify-start text-left font-normal",
              !field.value && "text-muted-foreground"
            )}
          >
            <CalendarIcon className="mr-2 h-4 w-4" />
            {field.value ? (
              format(field.value, "PPP")
            ) : (
              <span>{translations.PICK_A_DATE}</span>
            )}
          </Button>
          {meta.touched && meta.error ? (
            <div className="text-sm font-medium text-destructive ">
              {meta.error}
            </div>
          ) : null}
        </div>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar
          mode="single"
          selected={field.value}
          onSelect={(val) => {
            setFieldValue(field.name, val);
          }}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  );
}
