import { IsNotEmpty, IsString } from 'class-validator';
import { Prisma } from 'generated/prisma';

type TenantCreateInput = Pick<Prisma.TenantCreateInput, 'name'>;

export class CreateTenantDto implements TenantCreateInput {
  @IsNotEmpty()
  @IsString()
  name: string;
}
