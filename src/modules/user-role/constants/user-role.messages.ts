export const UserRoleMessages = {
  SUCCESS: {
    CREATED: 'User-Role created successfully.',
    DELETED: 'User-Role deleted successfully.',
    FOUND: 'User-Role found.',
    FOUND_ALL: 'User-Roles retrieved successfully.',
  },
  ERROR: {
    NOT_FOUND: 'User-Role not found.',
    ALREADY_EXISTS: 'User-Role already exists.',
    DELETE_FAILED: 'Could not delete user-role.',
  },
} as const;
