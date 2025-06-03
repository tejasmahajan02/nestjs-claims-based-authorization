import { Role } from 'generated/prisma';
import { CreateRoleDto } from '../dto/create-role.dto';

export const mockCreateRoleDto: CreateRoleDto = {
  name: 'brand_viewer',
  description: 'Can able to view brand api data.',
};

export const mockRole: Role = {
  id: 1,
  ...mockCreateRoleDto
};
