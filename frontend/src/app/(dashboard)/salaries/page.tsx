"use client";
import SalariesTable from "@/components/SalariesTable";
import { Button } from "@/components/ui/button";
import { translations } from "@/localization";
import { EmployeesProvider } from "@/Providers/employees";
import SalariesProvider from "@/Providers/salaries";
import React, { useState } from "react";

const Page = () => {
  const [isEditMode, setIsEditMode] = useState(false);
  return (
    <EmployeesProvider>
      <SalariesProvider>
        <div className="h-full flex-1 flex-col space-y-8 p-8 md:flex">
          <div className="flex items-center flex-row justify-between space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">
              {translations.SALARIES_PAGE_TITLE}
            </h2>
            <div className="ml-auto">
              {isEditMode ? (
                <>
                  <Button
                    className="w-32 ml-2"
                    variant="destructive"
                    onClick={() => setIsEditMode(false)}
                  >
                    {translations.CANCEL}
                  </Button>
                  <Button
                    variant="default"
                    className="w-32 ml-2"
                    onClick={() => setIsEditMode(false)}
                  >
                    {translations.SAVE}
                  </Button>
                </>
              ) : (
                <Button variant="default" onClick={() => setIsEditMode(true)}>
                  {translations.EDIT_MODE}
                </Button>
              )}
            </div>
          </div>
          <SalariesTable isEditMode={isEditMode} />
        </div>
      </SalariesProvider>
    </EmployeesProvider>
  );
};

export default Page;
