import { Action } from 'src/common/enums/action.enum';

export const DOG_RESOURCE = 'dog';

export enum DogPermission {
  CREATE = `${Action.CREATE}:${DOG_RESOURCE}`,
  READ = `${Action.READ}:${DOG_RESOURCE}`,
  UPDATE = `${Action.UPDATE}:${DOG_RESOURCE}`,
  DELETE = `${Action.DELETE}:${DOG_RESOURCE}`,
}
