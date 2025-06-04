import { SetMetadata } from '@nestjs/common';

export const PAGINATED_KEY = 'isPaginated';

export const Paginated = () => SetMetadata(PAGINATED_KEY, true);
