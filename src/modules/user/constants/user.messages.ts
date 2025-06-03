export const UserMessages = {
  SUCCESS: {
    CREATED: 'User created successfully.',
    UPDATED: 'User updated successfully.',
    DELETED: 'User deleted successfully.',
    FOUND: 'User found.',
    FOUND_ALL: 'Users retrieved successfully.',
  },
  ERROR: {
    NOT_FOUND: 'User not found.',
    ALREADY_EXISTS: 'User already exists.',
    VALIDATION_FAILED: 'Invalid user data.',
    DELETE_FAILED: 'Could not delete user.',
  },
} as const;