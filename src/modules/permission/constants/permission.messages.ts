export const PermissionMessages = {
  SUCCESS: {
    CREATED: 'Permission created successfully.',
    UPDATED: 'Permission updated successfully.',
    DELETED: 'Permission deleted successfully.',
    FOUND: 'Permission found.',
    FOUND_ALL: 'Permissions retrieved successfully.',
  },
  ERROR: {
    NOT_FOUND: 'Permission not found.',
    ALREADY_EXISTS: 'Permission already exists.',
    DELETE_FAILED: 'Could not delete permission.',
  },
} as const;