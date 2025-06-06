import { Action } from 'src/common/enums/action.enum';

export const PERMISSION_RESOURCE = 'permission';

export enum PermissionPermission {
  CREATE = `${Action.CREATE}:${PERMISSION_RESOURCE}`,
  READ = `${Action.READ}:${PERMISSION_RESOURCE}`,
  UPDATE = `${Action.UPDATE}:${PERMISSION_RESOURCE}`,
  DELETE = `${Action.DELETE}:${PERMISSION_RESOURCE}`,
}
