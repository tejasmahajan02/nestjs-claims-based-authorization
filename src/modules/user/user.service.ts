import { Injectable } from '@nestjs/common';
import { User, Prisma } from 'generated/prisma';
import { PrismaCrudService } from '../../common/services/prisma-crud.service';
import { PrismaService } from '../../common/services/prisma.service';

@Injectable()
export class UserService extends PrismaCrudService<
  User,
  Prisma.UserCreateInput,
  Prisma.UserUpdateInput,
  Prisma.UserWhereInput,
  Prisma.UserWhereUniqueInput,
  Prisma.UserOrderByWithRelationInput
> {
  constructor(private readonly prismaService: PrismaService) {
    super(prismaService.user);
  }

  async queryAll(): Promise<User[]> {
    return this.prismaService.user.findMany();
  }
}
