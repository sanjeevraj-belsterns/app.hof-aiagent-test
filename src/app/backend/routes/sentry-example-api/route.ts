import { NextResponse } from 'next/server';
import { withInterceptor } from '../../utils/interceptor';

export const dynamic = 'force-dynamic';

// A faulty API route to test Sentry's error monitoring

export const GET = withInterceptor(() => {
  throw new Error('Sentry Example API Route Error');
});
