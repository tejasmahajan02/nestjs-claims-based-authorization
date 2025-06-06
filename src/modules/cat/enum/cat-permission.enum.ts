import { Action } from 'src/common/enums/action.enum';

export const CAT_RESOURCE = 'cat';

export enum CatPermission {
  CREATE = `${Action.CREATE}:${CAT_RESOURCE}`,
  READ = `${Action.READ}:${CAT_RESOURCE}`,
  UPDATE = `${Action.UPDATE}:${CAT_RESOURCE}`,
  DELETE = `${Action.DELETE}:${CAT_RESOURCE}`,
}
