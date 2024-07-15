"use client";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider,
} from "@/components/ui/tooltip";
import Link from "next/link";

import { Home, Users2, CircleDollarSign } from "lucide-react";
import { usePathname } from "next/navigation";
import { translations } from "@/localization";
import { location } from "@/lib/location";

type NavLink = {
  href: string;
  label: string;
  Logo: any;
};

export const Sidebar = () => {
  const pathName = usePathname();
  const navLinks: NavLink[] = [
    {
      href: location.dashboardUrl(),
      label: translations.DASHBOARD,
      Logo: Home,
    },
    {
      Logo: Users2,
      href: location.employeesUrl(),
      label: translations.EMPLOYEES,
    },
    {
      Logo: CircleDollarSign,
      href: location.salariesUrl(),
      label: translations.SALARIES,
    },
  ];
  return (
    <aside className="fixed inset-y-0 left-0 z-10 hidden w-14 flex-col border-r bg-background sm:flex">
      <nav className="flex flex-col items-center gap-4 px-2 sm:py-5">
        {navLinks.map((navLink) => (
          <TooltipProvider key={navLink.label}>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href={navLink.href}
                  className={`flex h-9 w-9 items-center justify-center rounded-lg  transition-colors  md:h-8 md:w-8  ${
                    pathName.includes(navLink.href)
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {
                    <navLink.Logo
                      className={`h-5 w-5 transition-all group-hover:scale-110`}
                    />
                  }
                  <span className="sr-only">{navLink.label}</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right">{navLink.label}</TooltipContent>
            </Tooltip>
          </TooltipProvider>
        ))}
      </nav>
    </aside>
  );
};
