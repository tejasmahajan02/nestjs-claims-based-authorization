import { Action } from 'src/common/enums/action.enum';

export const USER_ROLE_RESOURCE = 'user-role';

export enum UserRolePermission {
  CREATE = `${Action.CREATE}:${USER_ROLE_RESOURCE}`,
  READ = `${Action.READ}:${USER_ROLE_RESOURCE}`,
  UPDATE = `${Action.UPDATE}:${USER_ROLE_RESOURCE}`,
  DELETE = `${Action.DELETE}:${USER_ROLE_RESOURCE}`,
}
