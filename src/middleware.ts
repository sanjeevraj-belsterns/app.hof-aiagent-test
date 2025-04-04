import { NextRequest, NextResponse } from 'next/server';
import { auth } from './app/auth';

// export default auth((req:any) => {
//   const { nextUrl } = req;
//   console.log(nextUrl, req)
//   const isLoggedIn = !!req.auth;
//   const role = (req.auth?.user as any)?.role;
//   // const isApiAuthRoute = nextUrl.pathname.startsWith(apiAuthPrefix);
//   const isPublicRoute = publicRoutes.includes(nextUrl.pathname);
//   const isAuthRoute = authRoutes.includes(nextUrl.pathname);
//   // const isProtectedRoute = protectedRoutes.includes(nextUrl.pathname);
//   // if(isProtectedRoute && role !== 'admin') {
//   //   return;
//   // }

//   if (isAuthRoute && isLoggedIn) {
//     return NextResponse.redirect(new URL(DEFAULT_LOGIN_REDIRECT, req.url));
//   }

//   if (isAuthRoute && !isLoggedIn) {
//     return NextResponse.next();
//   }

//   if (!isLoggedIn && !isPublicRoute) {
//     return NextResponse.redirect(new URL('/sign-in', req.url));
//   }
//   return NextResponse.next();
// });

export async function middleware(req: NextRequest) {
  const { nextUrl } = req;
  const token = await auth();
  if (!token?.user && nextUrl.pathname !== '/sign-in') {
    return NextResponse.redirect(new URL('/sign-in', req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)']
};
