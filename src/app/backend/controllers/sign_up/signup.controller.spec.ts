import { SignUpController } from './signup.controller';
import { UserService } from '../user/user.service';
import { SignUpMessages } from '../../constants/static_message';
import { SignUpValidator } from '../../validators/signup.validator';

jest.mock('../user/user.service');
jest.mock('../../validators/signup.validator');

describe('SignUpController', () => {
  let signUpController: SignUpController;

  beforeEach(() => {
    signUpController = new SignUpController();
    jest.clearAllMocks(); // Clear mocks before each test
  });

  it('should successfully sign up a new user', async () => {
    const payload = { email: 'test@example.com', password: 'password123' };

    // Mocking the validator's instance method
    const userSignUpValidatorInstance = new SignUpValidator();
    (userSignUpValidatorInstance.userSignUp as jest.Mock).mockResolvedValue(
      true
    );
    (SignUpValidator as jest.Mock).mockImplementation(
      () => userSignUpValidatorInstance
    );

    // Mocking UserService methods
    const userServiceInstance = new UserService();
    (userServiceInstance.getUserByEmail as jest.Mock).mockResolvedValue(null);
    (userServiceInstance.createUser as jest.Mock).mockResolvedValue(true);
    (UserService as jest.Mock).mockImplementation(() => userServiceInstance);

    const result = await signUpController.SignUp(payload);

    expect(result).toEqual({
      message: SignUpMessages.UserSignInSuccessful,
      data: null
    });
    expect(userSignUpValidatorInstance.userSignUp).toHaveBeenCalledWith(
      payload
    );
    expect(userServiceInstance.getUserByEmail).toHaveBeenCalledWith(
      payload.email
    );
    expect(userServiceInstance.createUser).toHaveBeenCalledWith(
      payload.email,
      payload.password
    );
  });

  it('should throw an error if the email already exists', async () => {
    const payload = { email: 'test@example.com', password: 'password123' };

    const userSignUpValidatorInstance = new SignUpValidator();
    (userSignUpValidatorInstance.userSignUp as jest.Mock).mockResolvedValue(
      true
    );
    (SignUpValidator as jest.Mock).mockImplementation(
      () => userSignUpValidatorInstance
    );

    const userServiceInstance = new UserService();
    (userServiceInstance.getUserByEmail as jest.Mock).mockResolvedValue(true);
    (UserService as jest.Mock).mockImplementation(() => userServiceInstance);

    await expect(signUpController.SignUp(payload)).rejects.toEqual({
      message: SignUpMessages.ExistEmail,
      statusCode: 400,
      data: null
    });

    expect(userSignUpValidatorInstance.userSignUp).toHaveBeenCalledWith(
      payload
    );
    expect(userServiceInstance.getUserByEmail).toHaveBeenCalledWith(
      payload.email
    );
    expect(userServiceInstance.createUser).not.toHaveBeenCalled(); // User creation should not happen
  });

  it('should throw an error if validation fails', async () => {
    const payload = { email: 'test@example.com', password: 'password123' };

    // Mocking the validator's instance method
    const userSignUpValidatorInstance = new SignUpValidator();
    (userSignUpValidatorInstance.userSignUp as jest.Mock).mockRejectedValue(
      new Error('Validation error')
    );
    (SignUpValidator as jest.Mock).mockImplementation(
      () => userSignUpValidatorInstance
    );

    // Create a new instance of UserService and mock its methods
    const userServiceInstance = new UserService();
    (UserService as jest.Mock).mockImplementation(() => userServiceInstance);

    await expect(signUpController.SignUp(payload)).rejects.toThrow(
      'Validation error'
    );
    expect(userSignUpValidatorInstance.userSignUp).toHaveBeenCalledWith(
      payload
    );
    expect(userServiceInstance.getUserByEmail).not.toHaveBeenCalled(); // No user lookup should happen
    expect(userServiceInstance.createUser).not.toHaveBeenCalled(); // User creation should not happen
  });
});
