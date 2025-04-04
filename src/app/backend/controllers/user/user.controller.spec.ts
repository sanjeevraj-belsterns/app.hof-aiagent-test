import { UserController } from './user.controller'; // Adjust the path as necessary
import { UserMessages } from '../../constants/static_message';
import { users as PrismaUser } from '@prisma/client';
import { UserService } from './user.service';

jest.mock('./user.service');

describe('UserController', () => {
  let userController: UserController;

  beforeEach(() => {
    userController = new UserController();
    jest.clearAllMocks();
  });

  it('should fetch all users successfully', async () => {
    const mockUsers: PrismaUser[] = [
      { id: 1, email: 'user1@example.com', is_active: true },
      { id: 2, email: 'user2@example.com', is_active: false }
    ] as unknown as PrismaUser[];

    (UserService.prototype.getAllUsers as jest.Mock).mockResolvedValue(
      mockUsers
    );

    const result = await userController.GetAllUsers();

    expect(result).toEqual({
      message: UserMessages.UsersFetchedSuccessfully,
      data: [
        { id: 1, email: 'user1@example.com', is_active: true },
        { id: 2, email: 'user2@example.com', is_active: false }
      ]
    });
    expect(UserService.prototype.getAllUsers).toHaveBeenCalledTimes(1);
  });

  it('should throw an error if fetching users fails', async () => {
    (UserService.prototype.getAllUsers as jest.Mock).mockRejectedValue(
      new Error('Database error')
    );

    await expect(userController.GetAllUsers()).rejects.toThrow(
      'Database error'
    );
    expect(UserService.prototype.getAllUsers).toHaveBeenCalledTimes(1);
  });
});
