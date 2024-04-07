import { useNavigate, useRouteError } from 'react-router-dom';
import { Button } from './components/ui/button';

const ErrorPage = () => {
  const navigate = useNavigate();
  const error = useRouteError();
  console.error(error);

  return (
    <div className="flex flex-col gap-4 justify-center items-center w-full h-screen">
      <h1 className="text-5xl text-slate-950 font-bold">Oops!</h1>
      <p className="text-destructive">
        Sorry, an unexpected error has occurred.
      </p>
      <p>
        <em>
          {(error as Error)?.message ||
            (error as { statusText?: string })?.statusText}
        </em>
      </p>
      <p>{(error as { data?: string })?.data}</p>

      <Button
        variant="link"
        className="text-base font-semibold text-blue-500"
        onClick={() => navigate(-1)}>
        Go back
      </Button>
    </div>
  );
};

export default ErrorPage;
