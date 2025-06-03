import { Injectable } from '@nestjs/common';
import { PERMISSION_REGISTRY } from './constants/permission-registry.constant';

@Injectable()
export class PermissionRegistryService {
  findAll() {
    return PERMISSION_REGISTRY;
  }
}
