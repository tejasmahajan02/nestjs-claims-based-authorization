import { IsNotEmpty, IsString } from 'class-validator';
import { Prisma } from 'generated/prisma';

type RoleCreateInput = Pick<Prisma.RoleCreateInput, 'name' | 'description'>;

export class CreateRoleDto implements RoleCreateInput {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  description: string;
}
