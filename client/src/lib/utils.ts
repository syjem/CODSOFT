import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const generateFallback = (name: string) => {
  return name
    .split(' ')
    .map((letter) => letter[0])
    .join('');
};
