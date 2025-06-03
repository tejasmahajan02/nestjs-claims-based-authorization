export const RolePermissionMessages = {
  SUCCESS: {
    CREATED: 'Role-Permission created successfully.',
    DELETED: 'Role-Permission deleted successfully.',
    FOUND: 'Role-Permission found.',
    FOUND_ALL: 'Role-Permissions retrieved successfully.',
  },
  ERROR: {
    NOT_FOUND: 'Role-Permission not found.',
    ALREADY_EXISTS: 'Role-Permission already exists.',
    DELETE_FAILED: 'Could not delete role-permission.',
  },
} as const;
