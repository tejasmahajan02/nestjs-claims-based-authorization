import { Injectable } from '@nestjs/common';
import { PrismaCrudService } from 'src/common/services/prisma-crud.service';
import { PrismaService } from 'src/common/services/prisma.service';
import { Prisma, Tenant } from 'generated/prisma';

@Injectable()
export class TenantService extends PrismaCrudService<
  Tenant,
  Prisma.TenantCreateInput,
  Prisma.TenantUpdateInput,
  Prisma.TenantWhereInput,
  Prisma.TenantWhereUniqueInput,
  Prisma.TenantOrderByWithRelationInput
> {
  constructor(private readonly prismaService: PrismaService) {
    super(prismaService.tenant);
  }
}
