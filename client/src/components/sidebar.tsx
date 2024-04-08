import { navLists } from '@/lib/nav-lists';
import { iconMap } from '@/lib/types';
import { cn } from '@/lib/utils';
import { Link, useLocation } from 'react-router-dom';
import { ReceiptText } from 'lucide-react';

const Sidebar = ({ className }: { className?: string }) => {
  const location = useLocation();

  return (
    <aside
      className={cn(
        'flex flex-col gap-1 w-[250px] border-r h-full',
        className
      )}>
      <div className="py-4 flex items-center justify-center gap-2 border-b shadow-sm cursor-default">
        <ReceiptText />
        <h1 className="text-xl  font-bold">Contact Manager</h1>
      </div>
      {navLists.map((nav) => {
        const Icon = iconMap[nav.icon];
        return (
          <nav key={nav.label}>
            <Link
              to={`/contacts/${nav.type}`}
              className={cn(
                'flex py-3 items-center justify-start gap-6 rounded-md hover:bg-gray-100 px-4 text-base font-medium transition-colors text-gray-700',
                {
                  'text-black font-bold bg-gray-200 hover:bg-gray-200':
                    location.pathname === `/contacts/${nav.type}`,
                }
              )}>
              {
                <Icon
                  className={cn('h-5 w-5', {
                    'text-black': location.pathname === `/contacts/${nav.type}`,
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
