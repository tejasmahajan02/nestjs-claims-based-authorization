import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/common/services/prisma.service';
import { PrismaCrudService } from 'src/common/services/prisma-crud.service';
import { Prisma, UserRole } from 'generated/prisma';

@Injectable()
export class UserRoleService extends PrismaCrudService<
  UserRole,
  Prisma.UserRoleCreateInput,
  Prisma.UserRoleUpdateInput,
  Prisma.UserRoleWhereInput,
  Prisma.UserRoleWhereUniqueInput,
  Prisma.UserRoleOrderByWithRelationInput
> {
  constructor(private readonly prismaService: PrismaService) {
    super(prismaService.userRole);
  }
}
