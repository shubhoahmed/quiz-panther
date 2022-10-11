import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
    const error = useRouteError();
    console.error(error);

    return (
        <div className=" lg:w-3/5 mx-auto mt-52 p-2  text-center" id="error-page">
            <h1 className="font-bold text-3xl my-4">Oops!</h1>
            <p className="text-xl my-4 font-semibold text-red-500">Sorry, an unexpected error has occurred.</p>
            <p>
                <i>{error.statusText || error.message}</i>
            </p>
        </div>
    );
}