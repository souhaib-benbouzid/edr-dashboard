"use client";
import React, { useCallback, useContext, useEffect, useState } from "react";
import { Button } from "../ui/button";
import { translations } from "@/localization";
import { SalaryContext, SalaryProcessingContext } from "@/Providers/salaries";
import { useAsyncStorage } from "@/lib/asyncStorage";
import { PaymentLog } from "@/types";
import { Alert } from "../Alert";
import { useToast } from "../ui/use-toast";
import { useRouter } from "next/navigation";
import { v4 } from "uuid";

export const LOGS_KEY = "logs";

const useInitialState = () => {
  const { getItem } = useAsyncStorage();
  const data = getItem(LOGS_KEY);
  return data ? data : [];
};
const PaymentProcessor = () => {
  const { salaries } = useContext(SalaryProcessingContext) as SalaryContext;
  const { toast } = useToast();
  const { setItem } = useAsyncStorage();
  const [paymentLogs, setPaymentLogs] = useState<PaymentLog[]>(
    useInitialState()
  );
  const router = useRouter();
  const persist = useCallback(
    (data: PaymentLog[]) => {
      setItem(LOGS_KEY, data);
    },
    [setItem]
  );

  const processPayment = useCallback(() => {
    setPaymentLogs([
      ...paymentLogs,
      {
        id: v4(),
        time: new Date(),
        salaries: salaries.filter((salary) => salary.payDate !== null),
      },
    ]);

    toast({
      title: translations.PAYMENT_PROCESS_SUCCESS,
      description: translations.PAYMENT_PROCESS_SUCCESS_DESCRIPTION,
    });

    router.push("/dashboard");
  }, [paymentLogs, router, salaries, toast]);

  useEffect(() => {
    persist(paymentLogs);
  }, [paymentLogs, persist]);

  return (
    <div>
      <Alert
        renderTrigger={() => (
          <Button variant="default" className="w-56 ml-2">
            {translations.PAY}
          </Button>
        )}
        onSuccess={processPayment}
        trigger={"pay"}
        title={translations.PAYMENT_PROCESS_ALERT_DIALOG_TITLE}
        description={translations.PAYMENT_PROCESS_ALERT_DIALOG_DESCRIPTION}
      />
    </div>
  );
};

export default PaymentProcessor;
