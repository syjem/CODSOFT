import { Outlet } from 'react-router-dom';
import Sidebar from '@/components/sidebar';

const Root = () => {
  return (
    <div className="h-screen flex justify-center w-full">
      <Sidebar />
      <main className="container flex-1 w-full p-4">
        <Outlet />
      </main>
    </div>
  );
};

export default Root;
