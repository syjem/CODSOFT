import Cards from './cards';
import { Link, useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { getContacts } from '@/fetch/get';
import { TContact } from '@/lib/types';
import { Button } from '@/components/ui/button';

const AllContacts = () => {
  const { type } = useParams();

  const { data, isPending, isError, error } = useQuery({
    queryKey: ['contacts'],
    queryFn: getContacts,
  });

  if (isPending) return <div>Loading...</div>;
  if (isError)
    return <div>Error: {error.message || 'An error has occurred'}</div>;

  return (
    <>
      {data.message && <div>{data.message}</div>}
      {data.contacts && (
        <div className="w-full">
          <div className="mb-4 flex justify-between items-center">
            <h2 className="text-lg font-semibold text-slate-950 capitalize">
              Contacts
            </h2>
            <Button asChild variant="ghost" className="font-semibold">
              <Link to="/contacts/new">New</Link>
            </Button>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {data.contacts.map((contact: TContact) => (
              <Cards key={contact.id} contact={contact} type={type} />
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default AllContacts;
