import { AuthController } from '@/app/backend/controllers/auth/auth.controller';
import { withInterceptor } from '@/app/backend/utils/interceptor';

export const POST = withInterceptor(async (request: Request) => {
  const body = await request.json();
  const result = await new AuthController().Signin(body);
  return result;
});
