import { TableFieldType } from "@/types";
import { ReactNode } from "react";
import { SelectOption } from "../forms/MultiSelectField";

export type TableData = {
  id: string;
  [key: string]: any;
};

export type Column = {
  field: string;
  renderHeader?: () => ReactNode;
  render?: (data: TableData) => ReactNode;
  renderFormField?: (data: TableData) => ReactNode;
  fieldType: TableFieldType;
  hideOnTablet?: boolean;
  hideOnMobile?: boolean;
  width?: string;
  options?: SelectOption[];
  isNoneEditable?: boolean;
};
