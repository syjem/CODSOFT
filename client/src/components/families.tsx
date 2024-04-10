import { TContact } from '@/lib/types';
import { useEffect, useState } from 'react';
import Cards from './cards';
import { useParams } from 'react-router-dom';

const Families = () => {
  const { type } = useParams();

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
        setContacts(data.contacts);
      } catch (error) {
        console.error(error);
      }
    };

    fetchContacts();
  }, []);

  if (contacts.length === 0) return <div>No contacts...</div>;
  return (
    <div className="w-full">
      <h2 className="text-lg font-semibold text-slate-950 mb-4 capitalize">
        {type}
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        {contacts.map((contact) => (
          <Cards key={contact.id} contact={contact} type={type} />
        ))}
      </div>
    </div>
  );
};

export default Families;
