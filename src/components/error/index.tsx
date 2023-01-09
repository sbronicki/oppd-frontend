import React from "react";

function Error({ data }: Error) {
  console.log({
    data,
  });

  const { error, errorMsg } = data;
  console.log(errorMsg);

  return <div className="error-message">Error: {error}</div>;
}

export default Error;

interface Error {
  data: {
    error: string;
    errorMsg?: string;
  };
}
