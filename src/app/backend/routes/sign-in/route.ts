import { withInterceptor } from '@/app/backend/utils/interceptor';
import { SignUpController } from '../../controllers/sign_up/signup.controller';

export const POST = withInterceptor(async (request: Request) => {
  const body = await request.json();
  const result = await new SignUpController().SignUp(body);
  return result;
});
