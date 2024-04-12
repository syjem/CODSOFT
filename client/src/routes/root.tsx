import { Navigate, Outlet } from 'react-router-dom';
import Sidebar from '@/components/sidebar';

const Root = () => {
  return (
    <div className="container px-0 h-screen flex justify-center w-full">
      <Sidebar />
      <Navigate to="/contacts/all" />
      <main className="flex-1 w-full p-4">
        <Outlet />
      </main>
    </div>
  );
};

export default Root;
