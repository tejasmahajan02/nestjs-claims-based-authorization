import { BadRequestException, Injectable } from '@nestjs/common';
import {
  GLOBAL_SCOPES_ARRAY,
  GLOBAL_SCOPES_SET,
} from './constants/permission-registry.constant';

@Injectable()
export class PermissionRegistryService {
  findAll() {
    return GLOBAL_SCOPES_ARRAY;
  }

  findOne(scope: string) {
    const isValid = GLOBAL_SCOPES_SET.has(scope as any);
    if (!isValid) throw new BadRequestException('Incorrect permission scope.');
    return isValid;
  }
}
