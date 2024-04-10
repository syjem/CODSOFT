import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Link } from 'react-router-dom';
import { generateFallback } from '@/lib/utils';
import { TContact } from '@/lib/types';

type CardsProps = {
  contact: TContact;
  type?: string;
};

const Cards = ({ contact, type }: CardsProps) => {
  return (
    <Card className="w-full max-w-sm flex items-center justify-center">
      <Link to={`/contacts/${type}/${contact.id}`} className="w-full">
        <CardContent className="flex flex-col gap-4 items-center justify-center p-0 py-8">
          <Avatar>
            <AvatarImage src={contact.avatar} alt={contact.name} />
            <AvatarFallback>{generateFallback(contact.name)}</AvatarFallback>
          </Avatar>
          <span className="text-slate-950 text-sm md:text-base font-medium block">
            {contact.name}
          </span>
        </CardContent>
      </Link>
    </Card>
  );
};

export default Cards;
