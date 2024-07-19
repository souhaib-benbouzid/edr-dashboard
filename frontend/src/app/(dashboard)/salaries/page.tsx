"use client";
import SalariesTable from "@/components/SalariesTable";
import { Button } from "@/components/ui/button";
import { translations } from "@/localization";
import { EmployeesProvider } from "@/Providers/employees";
import SalariesProvider from "@/Providers/salaries";
import React, { useState } from "react";

const Page = () => {
  return (
    <EmployeesProvider>
      <SalariesProvider>
        <div className="h-full flex-1 flex-col space-y-8 p-8 md:flex">
          <div className="flex items-center flex-row justify-between space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">
              {translations.SALARIES_PAGE_TITLE}
            </h2>
            <div className="ml-auto">
              <Button
                variant="default"
                className="w-56 ml-2"
                onClick={() => alert(true)}
              >
                {translations.PAY}
              </Button>
            </div>
          </div>
          <SalariesTable />
        </div>
      </SalariesProvider>
    </EmployeesProvider>
  );
};

export default Page;
