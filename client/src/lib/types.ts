import {
  ContactIcon,
  ListTodoIcon,
  LockIcon,
  MessageSquareIcon,
  UserIcon,
} from 'lucide-react';

interface IconMap {
  [key: string]: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
}

export const iconMap: IconMap = {
  ContactIcon: ContactIcon,
  LockIcon: LockIcon,
  ListTodoIcon: ListTodoIcon,
  MessageSquareIcon: MessageSquareIcon,
  UserIcon: UserIcon,
};

export type TContact = {
  id?: number;
  first: string;
  last: string;
  avatar: string;
  twitter: string;
  notes: string;
  favorite: boolean;
};
