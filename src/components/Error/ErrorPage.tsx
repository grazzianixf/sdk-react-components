import React from "react";
import { Error } from "../../types";

interface ErrorPageProps {
    error?: Error;
}

export function ErrorPage( props: ErrorPageProps ) {
    const { error } = props;
    console.error(error);
  
    return (
      <div id="error-page">
        <h1>Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <p>
          <i>{error?.statusText || error?.message}</i>
        </p>
      </div>
    );
  }