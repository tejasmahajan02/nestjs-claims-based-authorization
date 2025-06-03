import { User } from 'generated/prisma';
import { CreateUserDto } from '../dto/create-user.dto';

export const mockCreateUserDto: CreateUserDto = {
  email: 'test@example.com',
  name: 'Test',
};

export const mockUser: User = {
  id: 1,
  ...mockCreateUserDto,
  name: mockCreateUserDto.name ?? null,
};
