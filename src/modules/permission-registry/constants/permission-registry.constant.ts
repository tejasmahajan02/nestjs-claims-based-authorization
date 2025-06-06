import { CatPermission } from 'src/modules/cat/enum/cat-permission.enum';
import { DogPermission } from 'src/modules/dog/enum/dog-permission.enum';

export const PERMISSION_REGISTRY_SET = new Set([
  ...Object.values(CatPermission),
  ...Object.values(DogPermission),
]);

export const PERMISSION_REGISTRY = Array.from(PERMISSION_REGISTRY_SET);
