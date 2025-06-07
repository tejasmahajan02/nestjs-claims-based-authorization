export const TenantMessages = {
  SUCCESS: {
    CREATED: 'Tenant created successfully.',
    UPDATED: 'Tenant updated successfully.',
    DELETED: 'Tenant deleted successfully.',
    FOUND: 'Tenant found.',
    FOUND_ALL: 'Tenants retrieved successfully.',
  },
  ERROR: {
    NOT_FOUND: 'Tenant not found.',
    ALREADY_EXISTS: 'Tenant already exists.',
    VALIDATION_FAILED: 'Invalid tenant data.',
    DELETE_FAILED: 'Could not delete tenant.',
  },
} as const;
