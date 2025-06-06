import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseInterceptors,
} from '@nestjs/common';
import { PermissionService } from './permission.service';
import { CreatePermissionDto } from './dto/create-permission.dto';
import { UpdatePermissionDto } from './dto/update-permission.dto';
import { ResponseMessage } from 'src/common/decorators/response-message.decorator';
import { PermissionMessages } from './constants/permission.messages';
import { RequirePermissions } from 'src/common/decorators/require-permissions.decorator';
import { PermissionPermission } from './enum/permission-permission.enum';
import { Paginated } from 'src/common/decorators/paginated.decorator';
import { HttpCacheInterceptor } from 'src/common/interceptors/http-cache.interceptor';

@Controller('permissions')
export class PermissionController {
  constructor(private readonly permissionService: PermissionService) {}

  @Post()
  @RequirePermissions(PermissionPermission.CREATE)
  @ResponseMessage(PermissionMessages.SUCCESS.CREATED)
  async create(@Body() createPermissionDto: CreatePermissionDto) {
    return await this.permissionService.create(createPermissionDto);
  }

  @Get()
  @UseInterceptors(HttpCacheInterceptor)
  @RequirePermissions(PermissionPermission.READ)
  @ResponseMessage(PermissionMessages.SUCCESS.FOUND_ALL)
  @Paginated()
  async findAll() {
    return await this.permissionService.findAll();
  }

  @Get(':permissionId')
  @RequirePermissions(PermissionPermission.READ)
  @ResponseMessage(PermissionMessages.SUCCESS.FOUND)
  async findOne(@Param('permissionId') permissionId: number) {
    return await this.permissionService.findOne({ id: permissionId });
  }

  @Patch(':permissionId')
  @RequirePermissions(PermissionPermission.UPDATE)
  @ResponseMessage(PermissionMessages.SUCCESS.UPDATED)
  async update(
    @Param('permissionId') permissionId: number,
    @Body() updatePermissionDto: UpdatePermissionDto,
  ) {
    return await this.permissionService.update(
      { id: permissionId },
      updatePermissionDto,
    );
  }

  @Delete(':permissionId')
  @RequirePermissions(PermissionPermission.DELETE)
  @ResponseMessage(PermissionMessages.SUCCESS.DELETED)
  async remove(@Param('permissionId') permissionId: number) {
    return await this.permissionService.delete({ id: permissionId });
  }
}
