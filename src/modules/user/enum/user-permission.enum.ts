import { Action } from 'src/common/enums/action.enum';

export const USER_RESOURCE = 'user';

export enum UserPermission {
  CREATE = `${Action.CREATE}:${USER_RESOURCE}`,
  READ = `${Action.READ}:${USER_RESOURCE}`,
  UPDATE = `${Action.UPDATE}:${USER_RESOURCE}`,
  DELETE = `${Action.DELETE}:${USER_RESOURCE}`,
}
