import * as bcrypt from 'bcryptjs';
import { UserMessages } from '../../constants/static_message';
import { SigninPayloadDto } from '../../dto/signin.dto';
import { UserService } from '../../services/users/user.service';

export class AuthController {
  async Signin(payload: SigninPayloadDto) {
    try {
      const { email, password } = payload;
      const user = await new UserService().getUserByEmail(email);

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
        payload.password,
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
