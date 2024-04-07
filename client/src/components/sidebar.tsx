import { navLists } from '@/lib/nav-lists';
import { iconMap } from '@/lib/types';
import { cn } from '@/lib/utils';
import { Link, useLocation } from 'react-router-dom';

const Sidebar = () => {
  const location = useLocation();

  return (
    <aside className="flex flex-col gap-2.5 w-full max-w-[250px] border-r h-full">
      {navLists.map((nav) => {
        const Icon = iconMap[nav.icon];
        return (
          <nav key={nav.label}>
            <Link
              to={nav.route}
              className={cn(
                'flex py-2 items-center justify-start gap-4 rounded-md hover:bg-gray-100 px-4 text-sm font-medium transition-colors text-gray-700',
                {
                  'text-black font-bold bg-gray-200':
                    location.pathname === nav.route,
                }
              )}>
              {
                <Icon
                  className={cn('h-5 w-5', {
                    'text-black': location.pathname === nav.route,
                  })}
                />
              }
              {nav.label}
            </Link>
          </nav>
        );
      })}
    </aside>
  );
};

export default Sidebar;
