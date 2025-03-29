import clsx, { type ClassValue } from 'clsx';

export const sleep = (ms: number = 1000) =>
  new Promise(resolve => setTimeout(resolve, ms));

export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}
