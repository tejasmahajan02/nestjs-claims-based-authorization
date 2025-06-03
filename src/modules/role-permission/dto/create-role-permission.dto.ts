import { IsInt, IsNotEmpty } from 'class-validator';

export class CreateRolePermissionDto {
  @IsNotEmpty()
  @IsInt()
  roleId: number;

  @IsNotEmpty()
  @IsInt()
  permissionId: number;
}
