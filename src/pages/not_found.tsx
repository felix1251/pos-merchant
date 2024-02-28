import React from "react";
import { Link } from "react-router-dom";

const NotFoud: React.FunctionComponent = () => {
  return (
    <div className="flex flex-grow items-center justify-center ">
      <div className="rounded-lg p-8 text-center">
        <h1 className="mb-4 text-6xl font-bold">404</h1>
        <p className="text-xl text-gray-600">
          Oops! The page you are looking for could not be found.
        </p>
        <Link
          to="/"
          className="mt-4 inline-block rounded bg-primary px-6 py-3 font-semibold text-white hover:bg-primary/80"
        >
          Go back to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFoud;
