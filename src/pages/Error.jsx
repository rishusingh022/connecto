import React from 'react';
import { useParams } from 'react-router-dom';

function ErrorPage() {
  const { errorCode } = useParams();
  return (
    <div className="errorContainer">
      <p className="errorText">Something went wrong!</p>
      {errorCode && <p className="errorText">{`Error code: ${errorCode}`}</p>}
    </div>
  );
}

export default ErrorPage;