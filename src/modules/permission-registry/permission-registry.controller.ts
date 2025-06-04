import { Controller, Get, Param } from '@nestjs/common';
import { PermissionRegistryService } from './permission-registry.service';
import { ResponseMessage } from 'src/common/decorators/response-message.decorator';

@Controller('permission-registry')
export class PermissionRegistryController {
  constructor(
    private readonly permissionRegistryService: PermissionRegistryService,
  ) {}

  @Get()
  @ResponseMessage('Permission scopes listed successfully.')
  findAll() {
    return this.permissionRegistryService.findAll();
  }

  @Get(':scope')
  @ResponseMessage('Permission scopes is correct.')
  findOne(@Param('scope') scope: string) {
    return this.permissionRegistryService.findOne(scope);
  }
}
