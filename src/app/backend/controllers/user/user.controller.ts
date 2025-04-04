import { UserMessages } from '../../constants/static_message';
import { users } from '@prisma/client';
import { UserService } from '../../services/users/user.service';

export class UserController {
  async GetAllUsers() {
    try {
      const users = await new UserService().getAllUsers();

      const response = users.map((item: users) => ({
        id: item.id,
        email: item.email,
        is_active: item.is_active
      }));

      return {
        message: UserMessages.UsersFetchedSuccessfully,
        data: response
      };
    } catch (error: any) {
      throw error;
    }
  }
}
