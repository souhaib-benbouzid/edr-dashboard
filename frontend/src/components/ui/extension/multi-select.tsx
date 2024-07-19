"use client";

import * as React from "react";
import { X } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import {
  Command,
  CommandGroup,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { Command as CommandPrimitive } from "cmdk";
import { Label } from "@radix-ui/react-label";
import { translations } from "@/localization";

type SelectOption = {
  value: string;
  label: string;
};

type Props = {
  options: SelectOption[];
  label: string;
  onChange: (values: SelectOption[]) => void;
  onBlur: React.FocusEventHandler<HTMLInputElement>;
  name: string;
  values: SelectOption[];
  compact?: boolean;
};
export function MultiSelect({
  options,
  label,
  onChange,
  onBlur,
  name,
  values,
  compact,
}: Props) {
  const inputRef = React.useRef<HTMLInputElement>(null);
  const [open, setOpen] = React.useState(false);
  const [inputValue, setInputValue] = React.useState("");
  const handleUnselect = React.useCallback(
    (option: SelectOption) => {
      onChange(values.filter((s) => s.value !== option.value));
    },
    [onChange, values]
  );

  const handleKeyDown = React.useCallback(
    (e: React.KeyboardEvent<HTMLDivElement>) => {
      const input = inputRef.current;
      if (input) {
        if (e.key === "Delete" || e.key === "Backspace") {
          if (input.value === "") {
            const newSelected = [...values];
            newSelected.pop();
            onChange(newSelected);
          }
        }
        // This is not a default behaviour of the <input /> field
        if (e.key === "Escape") {
          input.blur();
        }
      }
    },
    [onChange, values]
  );

  const selectables = options.filter(
    (option) => !values.some((item) => item.value === option.value)
  );
  return (
    <>
      {!compact && <Label>{label}</Label>}
      <Command
        onKeyDown={handleKeyDown}
        className="overflow-visible bg-transparent"
      >
        <div className="group rounded-md border border-input px-3 py-2 text-sm ring-offset-background focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2">
          <div className="flex flex-wrap gap-1">
            {values.map((option) => {
              return (
                <Badge key={option.value} variant="secondary">
                  {option.label}
                  <button
                    type="button"
                    className="ml-1 rounded-full outline-none ring-offset-background focus:ring-2 focus:ring-ring focus:ring-offset-2"
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        handleUnselect(option);
                      }
                    }}
                    onMouseDown={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                    }}
                    onClick={() => handleUnselect(option)}
                  >
                    <X className="h-3 w-3 text-muted-foreground hover:text-foreground" />
                  </button>
                </Badge>
              );
            })}
            {/* Avoid having the "Search" Icon */}
            <CommandPrimitive.Input
              name={name}
              ref={inputRef}
              value={inputValue}
              onValueChange={setInputValue}
              onBlur={(e) => {
                onBlur(e);
                setOpen(false);
              }}
              onFocus={() => setOpen(true)}
              placeholder={translations.MULTI_SELECT_PLACEHOLDER}
              className="ml-2 flex-1 bg-transparent outline-none placeholder:text-muted-foreground"
            />
          </div>
        </div>
        <div className="relative mt-2">
          <CommandList>
            {open && selectables.length > 0 ? (
              <div className="absolute top-0 z-10 w-full rounded-md border bg-popover text-popover-foreground shadow-md outline-none animate-in">
                <CommandGroup className="overflow-auto">
                  {selectables.map((option) => (
                    <CommandItem
                      key={option.value}
                      onMouseDown={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                      }}
                      onSelect={() => {
                        setInputValue("");
                        onChange([...values, option]);
                      }}
                      className={"cursor-pointer"}
                    >
                      {option.label}
                    </CommandItem>
                  ))}
                </CommandGroup>
              </div>
            ) : null}
          </CommandList>
        </div>
      </Command>
    </>
  );
}
