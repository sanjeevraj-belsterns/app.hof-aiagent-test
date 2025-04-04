'use client';
import React from 'react';
// import LogIn from '@/app/frontend/components/LogIn/LogIn';
import { signIn, useSession } from 'next-auth/react';
// import { useRouter } from 'next/navigation';
// import { useAlertManager } from '@/app/frontend/hooks/useAlertManager';
// import { StaticMessages } from '@/app/frontend/constants/app';

export interface SubmitData {
  email: string;
  password: string;
}

export default function SignIn() {
  // const router = useRouter();
  // const showAlert = useAlertManager();
  const { data: session } = useSession();

  // const handleSubmit = async ({ email, password }: SubmitData) => {
  //   try {
  //     const result = await signIn('credentials', {
  //       email,
  //       password,
  //       redirect: false
  //     });
  //     if (result?.error) {
  //       showAlert(result.error, true);
  //     } else {
  //       router.push('/home');
  //     }
  //   } catch {
  //     showAlert(StaticMessages.UnExpectedErrorMessage, true);
  //   }
  // };

  return (
    <div className="flex bg-green-300 min-h-screen w-screen items-center justify-center">
      {!session && (
        <>
          <p>Not signed in</p>
          <br />

          <button
            onClick={() => {
              console.log('clicked');
              signIn('zitadel', {
                callbackUrl: 'http://localhost:3000/home'
              });
            }}
          >
            Sign in with zitadel
          </button>
        </>
      )}
      {/* <LogIn handleSubmit={handleSubmit} /> */}
    </div>
  );
}
