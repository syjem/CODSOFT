import { useParams } from 'react-router-dom';
import AllContacts from '@/components/all-contacts';
import Favorites from '@/components/favorites';
import Families from '@/components/families';
import Friends from '@/components/friends';
import Work from '@/components/work';

type ParamsType = {
  type: 'all' | 'favorites' | 'families' | 'friends' | 'work';
};

const Types = () => {
  const { type } = useParams() as ParamsType;

  if (type === 'all') return <AllContacts />;
  if (type === 'favorites') return <Favorites />;
  if (type === 'families') return <Families />;
  if (type === 'friends') return <Friends />;
  if (type === 'work') return <Work />;
};

export default Types;
