import { Action } from 'src/common/enums/action.enum';

export const ROLE_RESOURCE = 'role';

export enum RolePermission {
  CREATE = `${Action.CREATE}:${ROLE_RESOURCE}`,
  READ = `${Action.READ}:${ROLE_RESOURCE}`,
  UPDATE = `${Action.UPDATE}:${ROLE_RESOURCE}`,
  DELETE = `${Action.DELETE}:${ROLE_RESOURCE}`,
}
