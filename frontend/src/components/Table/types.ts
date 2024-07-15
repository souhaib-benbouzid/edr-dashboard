import { ReactNode } from "react";

export type TableData = {
  id: string;
  [key: string]: any;
};

export type Column = {
  field: string;
  renderHeader?: () => ReactNode;
  render?: (data: TableData) => ReactNode;
  hideOnTablet?: boolean;
  hideOnMobile?: boolean;
  width?: string;
};
