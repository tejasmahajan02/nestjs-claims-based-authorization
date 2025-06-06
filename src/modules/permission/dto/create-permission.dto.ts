import { IsInt, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { Prisma } from 'generated/prisma';

type PermissionCreateInput = Pick<
  Prisma.PermissionCreateInput,
  'scope' | 'description'
>;

export class CreatePermissionDto implements PermissionCreateInput {
  @IsNotEmpty()
  @IsString()
  scope: string;

  @IsNotEmpty()
  @IsString()
  description: string;
}
