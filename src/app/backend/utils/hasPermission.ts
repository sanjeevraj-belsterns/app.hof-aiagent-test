import { NextRequest, NextResponse } from 'next/server';
import { auth } from '@/app/auth';
import { withInterceptor } from './interceptor';
import { getToken } from 'next-auth/jwt';
import CONFIG from '@/config';
import { UnauthorizedException } from './exceptions';
type ApiMethod = (request: NextRequest) => Promise<any>;

export function checkPermission(
  apiMethod: ApiMethod,
  permissions: string[]
): ApiMethod {
  return async request => {
    const token: any = await getToken({
      req: request,
      secret: CONFIG.AUTH.SECRET!
    });
    if (!token) {
      throw new UnauthorizedException('Unauthorised');
    }
    const authorised = permissions.includes(token.role);
    if (permissions.length && !authorised) {
      throw new UnauthorizedException('Unauthorised');
    }
    const response = await apiMethod(request);
    return response;
  };
}

export const hasPermission = (apiMethod: ApiMethod, permissions: string[]) =>
  withInterceptor(checkPermission(apiMethod, permissions));
