'use server';
import { auth, signOut } from '@/app/auth';
import Link from 'next/link';

export default async function HomePage() {
  const session = await auth();
  return (
    <div className="flex flex-1 flex-col min-h-screen items-center justify-center">
      <h4>Are you sure you want to sign out?</h4>
      <br />
      <form
        action={async () => {
          'use server';
          await signOut({ redirectTo: '/sign-in' });
        }}
      >
        <button
          style={{
            backgroundColor: 'green',
            padding: '10px',
            borderRadius: '2vh',
            color: 'white'
          }}
          type="submit"
        >
          Sign out
        </button>
        <div>{session?.user?.email}</div>
        <Link href={'/sentry-example-page'}>Sentry</Link>
      </form>
    </div>
  );
}
