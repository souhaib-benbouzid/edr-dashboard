"use client";
import { Column } from "@/components/Table/types";
import { translations } from "@/localization";
import { PaymentLog, Salary, TableFieldType } from "@/types";
import { format } from "date-fns";

export const useColumns = (): Column[] => {
  const columns: Column[] = [
    {
      field: "id",
      renderHeader: () => {
        return (
          <div className="w-18">{translations.PAYMENT_LOGS_TABLE_ID_FIELD}</div>
        );
      },
      fieldType: TableFieldType.TEXT,
      isNoneEditable: true,
    },
    {
      field: "time",
      renderHeader: () => {
        return (
          <div className="">
            {translations.PAYMENT_LOGS_TABLE_PROCESSING_DATE_FIELD}
          </div>
        );
      },
      render: (data) => {
        const paymentLog = data as PaymentLog;
        return (
          <div className="w-24">
            {paymentLog.time ? format(paymentLog.time, "PP") : ""}
          </div>
        );
      },
      fieldType: TableFieldType.DATE,
      isNoneEditable: true,
    },
  ];

  return columns;
};
