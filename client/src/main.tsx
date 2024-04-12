import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Toaster } from '@/components/ui/sonner';

import './index.css';

import Root from './routes/root.tsx';
import ErrorPage from './error-page.tsx';
import Types from './routes/types.tsx';
import Contact from './routes/contact.tsx';
import AddContactForm from './components/form.tsx';

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/contacts/:type',
        element: <Types />,
      },
      {
        path: '/contacts/:type/:contactId',
        element: <Contact />,
      },
    ],
  },
  {
    path: '/contacts/new',
    element: <AddContactForm />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <ReactQueryDevtools initialIsOpen={false} />
      <Toaster />
    </QueryClientProvider>
  </React.StrictMode>
);
