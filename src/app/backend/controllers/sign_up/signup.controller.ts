import prisma from '@/app/backend/utils/prisma';
import { SignUpValidator } from '../../validators/signup.validator';
import { SignUpMessages } from '../../constants/static_message';
import { SignUpPayloadDto } from '../../dto/signup.dto';
import { UserService } from '../../services/users/user.service';

export class SignUpController {
  async SignUp(payload: SignUpPayloadDto) {
    try {
      await new SignUpValidator().userSignUp(payload);

      const { email, password } = payload;
      const isEmailExist = await new UserService().getUserByEmail(email);

      if (isEmailExist) {
        throw {
          message: SignUpMessages.ExistEmail,
          statusCode: 400,
          data: null
        };
      }

      await new UserService().createUser(email, password);

      return {
        message: SignUpMessages.UserSignInSuccessful,
        data: null
      };
    } catch (error: any) {
      throw error;
    }
  }
}
