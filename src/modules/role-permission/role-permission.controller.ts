import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { RolePermissionService } from './role-permission.service';
import { CreateRolePermissionDto } from './dto/create-role-permission.dto';
import { ResponseMessage } from 'src/common/decorators/response-message.decorator';
import { RolePermissionMessages } from './constants/role-permission.messages';

@Controller('role-permission')
export class RolePermissionController {
  constructor(private readonly rolePermissionService: RolePermissionService) {}

  @Post()
  @ResponseMessage(RolePermissionMessages.SUCCESS.CREATED)
  async create(@Body() { roleId, permissionId }: CreateRolePermissionDto) {
    return await this.rolePermissionService.create({
      role: { connect: { id: roleId } },
      permission: { connect: { id: permissionId } },
    });
  }

  @Get()
  @ResponseMessage(RolePermissionMessages.SUCCESS.FOUND_ALL)
  async findAll() {
    return await this.rolePermissionService.findAll();
  }

  @Get('role/:roleId/permission/:permissionId')
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
