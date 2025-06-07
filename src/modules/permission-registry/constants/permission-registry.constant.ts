import { CatPermission } from 'src/modules/cat/enum/cat-permission.enum';
import { DogPermission } from 'src/modules/dog/enum/dog-permission.enum';
import { PermissionPermission } from 'src/modules/permission/enum/permission-permission.enum';
import { RolePermissionPermission } from 'src/modules/role-permission/enum/role-permission-permission.enum';
import { RolePermission } from 'src/modules/role/enum/role-permission.enum';
import { TenantPermission } from 'src/modules/tenant/enum/tenant-permission.enum';
import { UserRolePermission } from 'src/modules/user-role/enum/user-role-permission.enum';
import { UserPermission } from 'src/modules/user/enum/user-permission.enum';
import { PermissionEnum } from '../types/permission-enum.type';
import { createPermissionSet, setToArray } from '../utils/helpers.util';

// Shared scopes array
const SHARED_SCOPES: PermissionEnum[] = [
  UserRolePermission,
  UserPermission,
  TenantPermission,
  RolePermissionPermission,
  RolePermission,
  PermissionPermission,
  CatPermission,
  DogPermission,
] as const;

export const GLOBAL_SCOPES_SET = createPermissionSet(SHARED_SCOPES);
export const GLOBAL_SCOPES_ARRAY = setToArray(GLOBAL_SCOPES_SET);

// TENANT_SCOPES same as shared but excluding TenantPermission.DELETE
export const TENANT_SCOPES_SET = createPermissionSet(SHARED_SCOPES, [
  TenantPermission.DELETE,
]);

export const TENANT_SCOPES_ARRAY = setToArray(TENANT_SCOPES_SET);
