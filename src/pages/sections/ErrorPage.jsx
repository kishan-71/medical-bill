// ErrorPage.js (Create this file if you don't have it)
import React from 'react';

const ErrorPage = ({ error }) => {
  return (
    <div>
      <h1>Error</h1>
      <p>An error occurred: {error?.message || "Unknown error"}</p>
    </div>
  );
};

export default ErrorPage;