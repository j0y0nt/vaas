import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, you have to see this. Seems like something gone wrong on working on providing fix for this.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}
