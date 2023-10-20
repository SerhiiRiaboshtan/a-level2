import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
    const error = useRouteError();
    console.log(error[error]);
    return (
        <div id="error-page">
            <h1>Oops! Error!</h1>
        <p>
            <i>{error.statusText || error.message}</i>
        </p>
        </div>
    )
}