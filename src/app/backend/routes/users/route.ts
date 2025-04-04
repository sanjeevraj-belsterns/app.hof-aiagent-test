import { UserController } from '@/app/backend/controllers/user/user.controller';
import { withInterceptor } from '@/app/backend/utils/interceptor';
import { hasPermission } from '../../utils/hasPermission';

export const GET = hasPermission(
  async request => {
    const result = await new UserController().GetAllUsers();
    return result;
  },
  ['user', 'admin']
);
