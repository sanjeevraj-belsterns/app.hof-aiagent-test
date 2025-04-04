'use client';

import Link from 'next/link';

const Store = () => {
  return (
    <>
      <h1>Store page</h1>
      <Link href={'/dashboard'}>sentry</Link>
    </>
  );
};

export default Store;
