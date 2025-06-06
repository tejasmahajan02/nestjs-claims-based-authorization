import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  UseInterceptors,
} from '@nestjs/common';
import { RolePermissionService } from './role-permission.service';
import { CreateRolePermissionDto } from './dto/create-role-permission.dto';
import { ResponseMessage } from 'src/common/decorators/response-message.decorator';
import { RolePermissionMessages } from './constants/role-permission.messages';
import { HttpCacheInterceptor } from 'src/common/interceptors/http-cache.interceptor';
import { RequirePermissions } from 'src/common/decorators/require-permissions.decorator';
import { RolePermissionPermission } from './enum/role-permission-permission.enum';
import { Paginated } from 'src/common/decorators/paginated.decorator';

@Controller('role-permission')
export class RolePermissionController {
  constructor(private readonly rolePermissionService: RolePermissionService) {}

  @Post()
  @RequirePermissions(RolePermissionPermission.CREATE)
  @ResponseMessage(RolePermissionMessages.SUCCESS.CREATED)
  async create(@Body() { roleId, permissionId }: CreateRolePermissionDto) {
    return await this.rolePermissionService.create({
      role: { connect: { id: roleId } },
      permission: { connect: { id: permissionId } },
    });
  }

  @Get()
  @UseInterceptors(HttpCacheInterceptor)
  @RequirePermissions(RolePermissionPermission.READ)
  @ResponseMessage(RolePermissionMessages.SUCCESS.FOUND_ALL)
  @Paginated()
  async findAll() {
    return await this.rolePermissionService.findAll();
  }

  @Get('role/:roleId/permission/:permissionId')
  @RequirePermissions(RolePermissionPermission.READ)
  @ResponseMessage(RolePermissionMessages.SUCCESS.FOUND)
  async findOne(
    @Param('roleId') roleId: number,
    @Param('permissionId') permissionId: number,
  ) {
    return await this.rolePermissionService.findOne({
      roleId_permissionId: { roleId, permissionId },
    });
  }

  @Delete('role/:roleId/permission/:permissionId')
  @RequirePermissions(RolePermissionPermission.DELETE)
  @ResponseMessage(RolePermissionMessages.SUCCESS.DELETED)
  async remove(
    @Param('roleId') roleId: number,
    @Param('permissionId') permissionId: number,
  ) {
    return await this.rolePermissionService.delete({
      roleId_permissionId: { roleId, permissionId },
    });
  }
}
