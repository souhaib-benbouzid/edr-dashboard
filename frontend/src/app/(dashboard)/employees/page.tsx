import AddEmployee from "@/components/AddEmployee";
import EmployeesTable from "@/components/EmployeesTable";
import { translations } from "@/localization";
import React from "react";

const Page = () => {
  return (
    <div className="h-full flex-1 flex-col space-y-8 p-8 flex max-w-screen-2xl m-auto">
      <div className="flex items-center justify-between space-y-4">
        <h2 className="text-2xl font-bold tracking-tight">
          {translations.EMPLOYEES_PAGE_TITLE}
        </h2>
        <AddEmployee />
      </div>
      <EmployeesTable />
    </div>
  );
};

export default Page;
