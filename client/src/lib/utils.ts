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

export const getTypes = (type: string) => {
  switch (type) {
    case 'all':
      return 'Contacts';
    case 'favorites':
      return 'Favorites';
    case 'families':
      return 'Families';
    case 'friends':
      return 'Friends';
    case 'work':
      return 'Work';
    default:
      break;
  }
};
