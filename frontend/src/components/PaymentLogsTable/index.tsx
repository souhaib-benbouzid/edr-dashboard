"use client";

import React, { useRef, useState } from "react";
import DynamicTable from "@/components/Table";
import { translations } from "@/localization";
import { useColumns } from "./hooks/useColumns";
import { useAsyncStorage } from "@/lib/asyncStorage";
import { LOGS_KEY } from "../PaymentProcessor";
import { Button } from "../ui/button";
import { format } from "date-fns";

const useInitialState = () => {
  const { getItem } = useAsyncStorage();
  const data = getItem(LOGS_KEY);
  return data ? data : [];
};

const PaymentLogsTable = () => {
  const columns = useColumns();
  const [paymentLogs, setPaymentLogs] = useState(useInitialState);
  const downloadButton = useRef<HTMLAnchorElement | null>(null);
  const handleExport = () => {
    downloadButton.current?.click();
  };

  return (
    <>
      <a
        ref={downloadButton}
        className="w-56 ml-2"
        href={
          "data:text/plain;charset=utf-8," +
          encodeURIComponent(JSON.stringify(paymentLogs))
        }
        download={format(new Date(), "PPP") + ".json"}
      ></a>
      <div className="w-full flex">
        <Button
          onClick={handleExport}
          variant="default"
          className="w-56 ml-auto"
        >
          {translations.EXPORT_LOGS}
        </Button>
      </div>
      <DynamicTable
        id="payment-logs-table"
        title={translations.PAYMENT_LOGS_TABLE_TITLE}
        description={translations.PAYMENT_LOGS_TABLE_DESCRIPTION}
        data={paymentLogs}
        columns={columns}
        onEdit={() => {}}
        showActions={false}
      />
    </>
  );
};

export default PaymentLogsTable;
