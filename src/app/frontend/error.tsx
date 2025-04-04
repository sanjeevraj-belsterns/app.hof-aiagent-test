'use client';

// export default function Error({error}:{error:Error}){
//     return(
//         <h1>{error.message}</h1>
//     )
// }

import { NextPageContext } from 'next';
import React, { useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import * as Sentry from '@sentry/nextjs';

interface ErrorProps {
  statusCode?: number;
  error: Error;
}

const ErrorPage = ({ statusCode, error }: ErrorProps) => {
  const router = useRouter();

  useEffect(() => {
    // if (statusCode === 401) {
    //   setTimeout(() => {
    //     router.push('/sign-in');
    //   }, 3000);
    // }
    Sentry.captureException(error);
  }, [error]);

  return (
    <div style={{ textAlign: 'center', padding: '50px' }}>
      <h1>{statusCode ? `Error ${statusCode}` : 'An error occurred'}</h1>

      {statusCode === 500 ? (
        <p>Internal Server Error</p>
      ) : statusCode === 401 ? (
        <div>
          <p>
            Unauthorized access. You will be redirected to the sign-in page in 3
            seconds...
          </p>
        </div>
      ) : (
        <p>Something went wrong. Please try again later.</p>
      )}

      {statusCode !== 401 && (
        <Link href="/sign-in">Go back to the homepage</Link>
      )}
    </div>
  );
};

ErrorPage.getInitialProps = ({ res, err }: NextPageContext) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default ErrorPage;
