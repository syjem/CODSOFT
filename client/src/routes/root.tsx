import { Link, Outlet } from 'react-router-dom';
import { type TContact } from '@/lib/types';

const Root = () => {
  const contacts = [
    {
      id: 1,
      first: 'Jemuel',
      last: 'Repoylo',
      avatar:
        'https://avatars.githubusercontent.com/u/119649793?s=400&u=888bd958f4bf62d27b31fcc52ab025ed8be77f58&v=4',
      twitter: '@repoylo_jemuel',
      notes: 'Mr. Right',
      favorite: true,
    },
  ];
  return (
    <>
      <div
        id="sidebar"
        className="flex flex-col w-[22rem] bg-sidebar-bg border-r border-sidebar-border px-8">
        <h1 className="text-base font-medium flex items-center m-0 px-8 py-4 border-t border-sidebar-border order-1 before:mr-2 before:relative before:top-[1px]">
          React Router Contacts
        </h1>
        <div className="flex items-center gap-2 py-4 border-b border-sidebar-border">
          <form id="search-form" role="search" className="relative">
            <input
              id="q"
              aria-label="Search contacts"
              placeholder="Search"
              type="search"
              name="q"
              className="w-full pl-8 bg-no-repeat relative bg-[10px_12px]"
            />
            <div
              id="search-spinner"
              aria-hidden
              hidden={true}
              className="size-full absolute left-[10px] top-[12px] animate-spin"
            />
            <div className="sr-only" aria-live="polite"></div>
          </form>
          <form method="post">
            <button type="submit">New</button>
          </form>
        </div>
        <nav className="flex-1 overflow-auto pt-4">
          {contacts.length ? (
            <ul>
              {contacts.map((contact: TContact) => (
                <li key={contact.id} className="my-1">
                  <Link
                    to={`/contacts/${contact.id}`}
                    className="overflow-hidden flex items-center justify-start rounded-[8px] py-2 px-4 whitespace-pre gap-4 hover:bg-gray-200 active:bg-active/50 active:text-white font-semibold">
                    {contact.first} {contact.last}
                  </Link>
                </li>
              ))}
            </ul>
          ) : (
            <p>
              <i>No contacts</i>
            </p>
          )}
        </nav>
      </div>
      <div id="detail" className="flex-1 w-full py-8 px-16">
        <Outlet />
      </div>
    </>
  );
};

export default Root;
