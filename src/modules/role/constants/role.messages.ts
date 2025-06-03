export const RoleMessages = {
  SUCCESS: {
    CREATED: 'Role created successfully.',
    UPDATED: 'Role updated successfully.',
    DELETED: 'Role deleted successfully.',
    FOUND: 'Role found.',
    FOUND_ALL: 'Roles retrieved successfully.',
  },
  ERROR: {
    NOT_FOUND: 'Role not found.',
    ALREADY_EXISTS: 'Role already exists.',
    DELETE_FAILED: 'Could not delete role.',
  },
} as const;
