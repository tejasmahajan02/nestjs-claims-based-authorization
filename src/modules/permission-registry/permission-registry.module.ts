import { Module } from '@nestjs/common';
import { PermissionRegistryService } from './permission-registry.service';
import { PermissionRegistryController } from './permission-registry.controller';

@Module({
  controllers: [PermissionRegistryController],
  providers: [PermissionRegistryService],
})
export class PermissionRegistryModule {}
