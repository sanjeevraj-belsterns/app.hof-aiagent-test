import { UserService } from './user.service';
import prisma from '../../utils/prisma';
import * as bcrypt from 'bcryptjs';

jest.mock('../../utils/prisma', () => ({
  users: {
    findFirst: jest.fn(),
    create: jest.fn(),
    findMany: jest.fn()
  }
}));

describe('UserService', () => {
  let userService: UserService;

  beforeEach(() => {
    userService = new UserService();
    jest.clearAllMocks();
  });

  it('should get a user by email', async () => {
    const mockUser = { id: 1, email: 'test@example.com', is_active: true };

    (prisma.users.findFirst as jest.Mock).mockResolvedValue(mockUser);

    const result = await userService.getUserByEmail('test@example.com');

    expect(result).toEqual(mockUser);
    expect(prisma.users.findFirst).toHaveBeenCalledWith({
      where: { email: 'test@example.com', is_active: true }
    });
  });

  it('should create a new user', async () => {
    const email = 'test@example.com';
    const password = 'password123';

    jest
      .spyOn(bcrypt, 'hash')
      .mockImplementation(() => Promise.resolve('hashedPassword'));

    await userService.createUser(email, password);
    expect(prisma.users.create).toHaveBeenCalledTimes(1);
  });

  it('should fetch all users', async () => {
    const mockUsers = [
      { id: 1, email: 'user1@example.com', is_active: true },
      { id: 2, email: 'user2@example.com', is_active: true }
    ];

    (prisma.users.findMany as jest.Mock).mockResolvedValue(mockUsers);

    const result = await userService.getAllUsers();

    expect(result).toEqual(mockUsers);
    expect(prisma.users.findMany).toHaveBeenCalled();
  });
});
