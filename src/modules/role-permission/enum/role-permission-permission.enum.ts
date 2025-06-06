import { Action } from 'src/common/enums/action.enum';

export const ROLE_PERMISSION_RESOURCE = 'role-permission';

export enum RolePermissionPermission {
  CREATE = `${Action.CREATE}:${ROLE_PERMISSION_RESOURCE}`,
  READ = `${Action.READ}:${ROLE_PERMISSION_RESOURCE}`,
  UPDATE = `${Action.UPDATE}:${ROLE_PERMISSION_RESOURCE}`,
  DELETE = `${Action.DELETE}:${ROLE_PERMISSION_RESOURCE}`,
}
