import Cards from './cards';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { getContacts } from '@/fetch/get';
import { TContact } from '@/lib/types';

const AllContacts = () => {
  const { type } = useParams();

  const { data, isPending, isError, error } = useQuery({
    queryKey: ['contacts'],
    queryFn: getContacts,
  });

  if (isPending) return <div>Loading...</div>;
  if (isError) return <div>Error: {error.message || 'An error occurred'}</div>;

  return (
    <div className="w-full">
      <h2 className="text-lg font-semibold text-slate-950 mb-4 capitalize">
        {type === 'all' && 'Contacts'}
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        {data.map((contact: TContact) => (
          <Cards key={contact.id} contact={contact} type={type} />
        ))}
      </div>
    </div>
  );
};

export default AllContacts;
