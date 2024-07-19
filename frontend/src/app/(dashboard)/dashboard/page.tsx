import PaymentLogsTable from "@/components/PaymentLogsTable";
import { translations } from "@/localization";
import React from "react";

type Props = {};

const Page = (props: Props) => {
  return (
    <div className="h-full flex-1 flex-col space-y-8 p-8 md:flex">
      <div className="flex items-center flex-row justify-between space-y-4">
        <h2 className="text-2xl font-bold tracking-tight">
          {translations.DASHBOARD_PAGE_TITLE}
        </h2>
      </div>
      <PaymentLogsTable />
    </div>
  );
};

export default Page;
