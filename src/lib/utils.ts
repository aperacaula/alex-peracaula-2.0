import { ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getImageUrl(url: string): string {
  // Add any image URL processing logic here
  return url;
}

export function formatYear(year: number): string {
  return year.toString();
}