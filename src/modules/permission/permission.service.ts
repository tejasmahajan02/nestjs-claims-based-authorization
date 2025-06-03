import { Injectable } from '@nestjs/common';
import { PrismaCrudService } from 'src/common/services/prisma-crud.service';
import { Permission, Prisma } from 'generated/prisma';
import { PrismaService } from 'src/common/services/prisma.service';

@Injectable()
export class PermissionService extends PrismaCrudService<
  Permission,
  Prisma.PermissionCreateInput,
  Prisma.PermissionUpdateInput,
  Prisma.PermissionWhereInput,
  Prisma.PermissionWhereUniqueInput,
  Prisma.PermissionOrderByWithRelationInput
> {
  constructor(private readonly prismaService: PrismaService) {
    super(prismaService.permission);
  }
}
