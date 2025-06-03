export const DogMessages = {
  SUCCESS: {
    CREATED: 'Dog created successfully.',
    UPDATED: 'Dog updated successfully.',
    DELETED: 'Dog deleted successfully.',
    FOUND: 'Dog found.',
    FOUND_ALL: 'Dogs retrieved successfully.',
  },
  ERROR: {
    NOT_FOUND: 'Dog not found.',
    ALREADY_EXISTS: 'Dog already exists.',
    VALIDATION_FAILED: 'Invalid dog data.',
    DELETE_FAILED: 'Could not delete dog.',
  },
} as const;
