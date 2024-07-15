"use client";
import TextField from "@/components/forms/TextField";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  InitialValues,
  initialValues,
  validationsSchema,
} from "@/constants/forms/loginForm";
import { translations } from "@/localization";
import { Form, Formik, FormikHelpers } from "formik";
import Link from "next/link";
import { useRouter } from "next/navigation";

export function LoginForm() {
  const router = useRouter();
  const handleSubmit = (
    values: InitialValues,
    formikHelpers: FormikHelpers<InitialValues>
  ) => {
    formikHelpers.setSubmitting(true);
    console.log(values);

    setTimeout(() => {
      formikHelpers.setSubmitting(false);
      router.push("/dashboard");
    }, 2000);
  };
  return (
    <Card className="w-full max-w-sm">
      <Formik
        initialValues={initialValues}
        validationSchema={validationsSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            <CardHeader>
              <CardTitle className="text-2xl">
                {translations.LOGIN_TITLE}
              </CardTitle>
              <CardDescription>
                {translations.LOGIN_DESCRIPTION}
              </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4">
              <div className="grid gap-2">
                <TextField
                  name="email"
                  label={translations.LOGIN_EMAIL_FIELD_LABEL}
                  type="email"
                  placeholder="m@example.com"
                  required
                />
              </div>
              <div className="grid gap-2">
                <TextField
                  name="password"
                  label={translations.LOGIN_PASSWORD_FIELD_LABEL}
                  type="password"
                  required
                />
              </div>
              <Button className="w-full" disabled={isSubmitting}>
                {translations.LOGIN_BUTTON_LABEL}
              </Button>
              <div className="mt-4 text-center text-sm">
                {translations.LOGIN_NEW_USER_LABEL}{" "}
                <Link href="/signup" className="underline">
                  {translations.LOGIN_SIGNUP_REDIRECT_LABEL}
                </Link>
              </div>
            </CardContent>
          </Form>
        )}
      </Formik>
    </Card>
  );
}
