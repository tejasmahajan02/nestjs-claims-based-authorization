import { CatPermission } from 'src/modules/cat/enum/cat-permissions.enum';
import { DogPermission } from 'src/modules/dog/enum/dog-permissions.enum';

export const PERMISSION_REGISTRY = Array.from(
  new Set([...Object.values(CatPermission), ...Object.values(DogPermission)]),
);
