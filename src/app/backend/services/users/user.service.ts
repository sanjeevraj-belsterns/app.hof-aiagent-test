import * as bcrypt from 'bcryptjs';
import prisma from '@/app/backend/utils/prisma'; // Ensure this points to your correct PrismaClient instance
import { users } from '@prisma/client';

export class UserService {
  async getUserByEmail(email: string) {
    return await prisma.users.findFirst({
      where: {
        email: email,
        is_active: true
      }
    });
  }

  async createUser(email: string, password: string): Promise<void> {
    await prisma.users.create({
      data: {
        email: email.toLowerCase(),
        password: password ? await bcrypt.hash(password, 10) : null
      }
    });
  }

  async getAllUsers(): Promise<users[]> {
    return await prisma.users.findMany();
  }
}
