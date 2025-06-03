import { Injectable } from '@nestjs/common';
import { PrismaCrudService } from 'src/common/services/prisma-crud.service';
import { Prisma, Role } from 'generated/prisma';
import { PrismaService } from 'src/common/services/prisma.service';

@Injectable()
export class RoleService extends PrismaCrudService<
  Role,
  Prisma.RoleCreateInput,
  Prisma.RoleUpdateInput,
  Prisma.RoleWhereInput,
  Prisma.RoleWhereUniqueInput,
  Prisma.RoleOrderByWithRelationInput
> {
  constructor(private readonly prismaService: PrismaService) {
    super(prismaService.role);
  }
}
