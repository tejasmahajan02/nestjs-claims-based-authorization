import { Permission } from 'generated/prisma';
import { CreatePermissionDto } from '../dto/create-permission.dto';

export const mockCreatePermissionDto: CreatePermissionDto = {
  scope: 'brand:view',
  description: 'Can view brand api data',
};

export const mockPermission: Permission = {
  id: 1,
  ...mockCreatePermissionDto,
  tenantId: null
};
