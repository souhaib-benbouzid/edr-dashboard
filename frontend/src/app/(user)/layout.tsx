import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/app/globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "EDR-Dashboard",
  description: "Easy employees management",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased flex justify-center place-items-center",
          inter.variable
        )}
      >
        {children}
      </body>
    </html>
  );
}
