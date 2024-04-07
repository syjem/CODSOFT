import { Button } from '@/components/ui/button';
import { type TContact } from '@/lib/types';
import { Form } from 'react-router-dom';

const Contact = () => {
  const contact = {
    first: 'Jemuel',
    last: 'Repoylo',
    avatar:
      'https://avatars.githubusercontent.com/u/119649793?s=400&u=888bd958f4bf62d27b31fcc52ab025ed8be77f58&v=4',
    twitter: '@repoylo_jemuel',
    notes: 'Mr. Right',
    favorite: true,
  };

  return (
    <div id="contact" className="flex max-w-[40rem]">
      <div className="size-[12rem] object-cover bg-[#c8c8c8] rounded-[1.5rem] mr-8 overflow-hidden">
        <img
          key={contact.avatar}
          src={contact.avatar}
          alt="kitten"
          className="size-full"
        />
      </div>

      <div>
        <h1 className="flex items-start gap-4 text-[2rem] font-bold m-0 active:outline-none active:text-active">
          {contact.first} {contact.last}
          <Favorite contact={contact} />
        </h1>

        {contact.twitter && (
          <p className="m-0">
            <a
              target="_blank"
              href={`https://twitter.com/${contact.twitter}`}
              className="flex text-base text-[#3992ff] hover:underline">
              {contact.twitter}
            </a>
          </p>
        )}

        {contact.notes && (
          <p className="whitespace-break-spaces">{contact.notes}</p>
        )}

        <div>
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
        </div>
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
