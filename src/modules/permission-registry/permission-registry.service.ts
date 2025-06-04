import { BadRequestException, Injectable } from '@nestjs/common';
import {
  PERMISSION_REGISTRY,
  PERMISSION_REGISTRY_SET,
} from './constants/permission-registry.constant';

@Injectable()
export class PermissionRegistryService {
  findAll() {
    return PERMISSION_REGISTRY;
  }

  findOne(scope: string) {
    const isValid = PERMISSION_REGISTRY_SET.has(scope as any);
    if (!isValid) throw new BadRequestException('Incorrect permission scope.');
    return isValid;
  }
}
