import { Injectable } from '@nestjs/common';
import { PrismaCrudService } from 'src/common/services/prisma-crud.service';
import { PrismaService } from 'src/common/services/prisma.service';
import { Prisma, RolePermission } from 'generated/prisma';

@Injectable()
export class RolePermissionService extends PrismaCrudService<
  RolePermission,
  Prisma.RolePermissionCreateInput,
  Prisma.RolePermissionUpdateInput,
  Prisma.RolePermissionWhereInput,
  Prisma.RolePermissionWhereUniqueInput,
  Prisma.RolePermissionOrderByWithRelationInput
> {
  constructor(private readonly prismaService: PrismaService) {
    super(prismaService.rolePermission);
  }
}
