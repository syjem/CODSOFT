// import { Button } from '@/components/ui/button';
import { type TContact } from '@/lib/types';
import { Form, Link, useParams } from 'react-router-dom';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { getTypes } from '@/lib/utils';
import { getContactWithId } from '@/fetch/get';
import { useQuery } from '@tanstack/react-query';

const Contact = () => {
  const { type, contactId } = useParams();

  const { data, isPending, isError, error } = useQuery({
    queryKey: ['contact', contactId],
    queryFn: () => getContactWithId(contactId as string),
  });

  if (isPending) return <div>Loading...</div>;
  if (isError) return <div>Error: {error.message || 'Contact not found'} </div>;

  return (
    <div id="contact" className="flex flex-col gap-y-8 max-w-ful">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <Link
              to={`/contacts/${type}`}
              className="text-lg font-semibold text-slate-950/40">
              {getTypes(type as string)}
            </Link>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage className="text-lg font-semibold text-slate-950">
              {data.name}
            </BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <div className="size-[12rem] object-cover bg-[#c8c8c8] rounded-[1.5rem] mr-8 overflow-hidden">
        <img src={data.avatar} alt={data.name} className="size-full" />
      </div>

      <div>
        <h2 className="flex items-start gap-4 text-[2rem] font-bold m-0 active:outline-none active:text-active">
          {data.name}
          <Favorite contact={data} />
        </h2>

        {data.twitter && (
          <p className="m-0">
            <a
              target="_blank"
              href={`https://twitter.com/${data.twitter}`}
              className="flex text-base text-[#3992ff] hover:underline">
              {data.twitter}
            </a>
          </p>
        )}

        {data.notes && <p className="whitespace-break-spaces">{data.notes}</p>}

        {/* <div>
          <Form action="edit">
            <Button type="submit">Edit</Button>
          </Form>
          <Form
            method="post"
            action="destroy"
            onSubmit={(event) => {
              if (!confirm('Please confirm you want to delete this record.')) {
                event.preventDefault();
              }
            }}>
            <Button type="submit">Delete</Button>
          </Form>
        </div> */}
      </div>
    </div>
  );
};

export default Contact;

const Favorite = ({ contact }: { contact: TContact }) => {
  const favorite = contact.favorite;
  return (
    <Form method="post">
      <button
        name="favorite"
        value={favorite ? 'false' : 'true'}
        aria-label={favorite ? 'Remove from favorites' : 'Add to favorites'}>
        {favorite ? '★' : '☆'}
      </button>
    </Form>
  );
};
