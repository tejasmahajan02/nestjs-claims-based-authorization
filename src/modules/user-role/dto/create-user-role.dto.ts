import { IsNotEmpty, IsInt } from 'class-validator';

export type UserRoleCreateInput = {
  userId: number;
  roleId: number;
};

export class CreateUserRoleDto implements UserRoleCreateInput {
  @IsNotEmpty()
  @IsInt()
  userId: number;

  @IsNotEmpty()
  @IsInt()
  roleId: number;
}
