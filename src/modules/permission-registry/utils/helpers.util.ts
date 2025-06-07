import { PermissionEnum } from "../types/permission-enum.type";

/**
 * Create a Set of permission strings from an array of enums,
 * excluding any permissions present in the filter array.
 */
export function createPermissionSet(
  scopes: PermissionEnum[],
  exclude: string[] = [],
): Set<string> {
  return new Set(
    scopes.flatMap((permissionEnum) =>
      Object.values(permissionEnum).filter((value) => !exclude.includes(value)),
    ),
  );
}

/**
 * Convert a Set to an array of strings.
 */
export function setToArray(permissionSet: Set<string>): string[] {
  return Array.from(permissionSet);
}
