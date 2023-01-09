import React from "react";

function Error({ message }: Error) {
  return <div className="error-message">Error: {message}</div>;
}

export default Error;

interface Error {
  message: string;
}
