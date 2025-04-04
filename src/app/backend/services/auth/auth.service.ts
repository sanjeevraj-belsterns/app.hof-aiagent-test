import { UserMessages } from '../../constants/static_message';
import { SigninPayloadDto } from '../../dto/signin.dto';
import prisma from '@/app/backend/utils/prisma';
import * as bcrypt from 'bcryptjs';
export class AuthService {
  async SignIn(body: SigninPayloadDto) {
    try {
      const user = await prisma.users.findFirst({
        where: {
          email: body.email,
          is_active: true
        }
      });
      if (!user) {
        throw {
          statusCode: 404,
          data: null,
          message: UserMessages.UserNotFound
        };
      }

      if (!user.password) {
        throw {
          statusCode: 404,
          data: null,
          message: UserMessages.UserNotFound
        };
      }

      const IsMatchPassword = await bcrypt.compare(
        body.password,
        user.password
      );
      if (!IsMatchPassword) {
        throw {
          statusCode: 401,
          data: null,
          message: UserMessages.InvalidPassword
        };
      }

      return {
        email: user.email,
        id: user.id
      };
    } catch (error: any) {
      throw error;
    }
  }
}
