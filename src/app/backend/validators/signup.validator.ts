import * as yup from 'yup';
export class SignUpValidator {
  async userSignUp(body: any) {
    try {
      const userSignUp = yup.object().shape({
        email: yup
          .string()
          .email('Email is not valid')
          .required('Email is required'),
        password: yup
          .string()
          .min(8, 'Password is too short - should be 8 chars minimum.')
          .required('Password is required')
      });
      await userSignUp.validate(body, { abortEarly: false });
      return true;
    } catch (err: any) {
      const validationErrors: any = {};
      err.inner.forEach((error: any) => {
        validationErrors[error.path] = error.message;
      });

      const error = {
        statusCode: 422,
        message: `One or more fields have incorrect data`,
        data: validationErrors
      };
      throw error;
    }
  }
}
