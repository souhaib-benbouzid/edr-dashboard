"use client";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import TextField from "./forms/TextField";
import { Form, Formik, FormikHelpers } from "formik";
import {
  initialValues,
  InitialValues,
  validationsSchema,
} from "@/constants/forms/signupForm";
import { translations } from "@/localization";

export function SignupForm() {
  const handleSubmit = (
    values: InitialValues,
    formikHelpers: FormikHelpers<InitialValues>
  ) => {
    formikHelpers.setSubmitting(true);
    console.log(values);

    setTimeout(() => {
      formikHelpers.setSubmitting(false);
    }, 2000);
  };
  return (
    <Card className="mx-auto max-w-sm">
      <Formik
        initialValues={initialValues}
        validationSchema={validationsSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            <CardHeader>
              <CardTitle className="text-xl">
                {translations.SIGNUP_TITLE}
              </CardTitle>
              <CardDescription>
                {translations.SIGNUP_DESCRIPTION}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4">
                <div className="grid gap-2">
                  <TextField
                    name="fullName"
                    label={translations.SIGNUP_FULL_NAME_FIELD_LABEL}
                    type="text"
                    placeholder="Max Smith"
                    required
                  />
                </div>
                <div className="grid gap-2">
                  <TextField
                    name="email"
                    label={translations.SIGNUP_EMAIL_FIELD_LABEL}
                    type="email"
                    placeholder="m@example.com"
                    required
                  />
                </div>
                <div className="grid gap-2">
                  <TextField
                    name="password"
                    label={translations.SIGNUP_PASSWORD_FIELD_LABEL}
                    type="password"
                    placeholder="m@example.com"
                    required
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {translations.SIGNUP_BUTTON_LABEL}
                </Button>
              </div>
              <div className="mt-4 text-center text-sm">
                {translations.SIGNUP_ALREADY_HAVE_AN_ACCOUNT_LABEL}{" "}
                <Link href="/" className="underline">
                  {translations.SIGNUP_LOGIN_REDIRECT_LABEL}
                </Link>
              </div>
            </CardContent>
          </Form>
        )}
      </Formik>
    </Card>
  );
}
