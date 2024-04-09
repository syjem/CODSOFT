import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Link } from 'react-router-dom';
import { generateFallback } from '@/lib/utils';
import { TContact } from '@/lib/types';
import { useEffect, useState } from 'react';

const AllContacts = () => {
  const [contacts, setContacts] = useState<TContact[]>([]);
  const baseUrl = 'http://127.0.0.1:5000/contacts';

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const res = await fetch(baseUrl);
        if (!res.ok) {
          throw new Error(`Request failed: ${res.status}`);
        }
        const data = await res.json();
        console.log(data);
        setContacts(data.contacts);
      } catch (error) {
        console.error(error);
        setContacts([]);
      }
    };

    fetchContacts();
  }, []);

  if (contacts.length === 0) return <div>No contacts...</div>;

  return (
    <div className="w-full">
      <h2 className="text-lg font-semibold text-slate-950 mb-4">Contacts</h2>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        {contacts.map((contact) => (
          <Card
            key={contact.id}
            className="w-full max-w-sm flex items-center justify-center">
            <Link to={`/contacts/all/${contact.id}`} className="w-full py-8">
              <CardContent className="flex flex-col gap-4 items-center justify-between p-0">
                <Avatar>
                  <AvatarImage src={contact.avatar} alt={contact.name} />
                  <AvatarFallback>
                    {generateFallback(contact.name)}
                  </AvatarFallback>
                </Avatar>
                <span className="text-slate-950 text-sm md:text-base font-medium block">
                  {contact.name}
                </span>
              </CardContent>
            </Link>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default AllContacts;
