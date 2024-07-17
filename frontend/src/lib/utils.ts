import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function titlize(text: string): string {
  return text.toLowerCase().replaceAll(/(?:^|\s|-)\S/g, (x) => x.toUpperCase());
}
