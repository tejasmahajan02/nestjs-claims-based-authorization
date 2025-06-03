export const CatMessages = {
  SUCCESS: {
    CREATED: 'Cat created successfully.',
    UPDATED: 'Cat updated successfully.',
    DELETED: 'Cat deleted successfully.',
    FOUND: 'Cat found.',
    FOUND_ALL: 'Cats retrieved successfully.',
  },
  ERROR: {
    NOT_FOUND: 'Cat not found.',
    ALREADY_EXISTS: 'Cat already exists.',
    VALIDATION_FAILED: 'Invalid cat data.',
    DELETE_FAILED: 'Could not delete cat.',
  },
} as const;
