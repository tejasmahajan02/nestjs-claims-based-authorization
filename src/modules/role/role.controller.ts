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
import { RoleService } from './role.service';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
import { ResponseMessage } from 'src/common/decorators/response-message.decorator';
import { RoleMessages } from './constants/role.messages';
import { RolePermission } from './enum/role-permission.enum';
import { RequirePermissions } from 'src/common/decorators/require-permissions.decorator';
import { HttpCacheInterceptor } from 'src/common/interceptors/http-cache.interceptor';
import { Paginated } from 'src/common/decorators/paginated.decorator';

@Controller('roles')
export class RoleController {
  constructor(private readonly roleService: RoleService) {}

  @Post()
  @RequirePermissions(RolePermission.CREATE)
  @ResponseMessage(RoleMessages.SUCCESS.CREATED)
  async create(@Body() createRoleDto: CreateRoleDto) {
    return await this.roleService.create(createRoleDto);
  }

  @Get()
  @UseInterceptors(HttpCacheInterceptor)
  @RequirePermissions(RolePermission.READ)
  @ResponseMessage(RoleMessages.SUCCESS.FOUND_ALL)
  @Paginated()
  async findAll() {
    return await this.roleService.findAll();
  }

  @Get(':roleId')
  @RequirePermissions(RolePermission.READ)
  @ResponseMessage(RoleMessages.SUCCESS.FOUND)
  async findOne(@Param('roleId') roleId: number) {
    return await this.roleService.findOne({ id: roleId });
  }

  @Patch(':roleId')
  @RequirePermissions(RolePermission.UPDATE)
  @ResponseMessage(RoleMessages.SUCCESS.UPDATED)
  async update(
    @Param('roleId') roleId: number,
    @Body() updateRoleDto: UpdateRoleDto,
  ) {
    return await this.roleService.update({ id: roleId }, updateRoleDto);
  }

  @Delete(':roleId')
  @RequirePermissions(RolePermission.DELETE)
  @ResponseMessage(RoleMessages.SUCCESS.DELETED)
  async remove(@Param('roleId') roleId: number) {
    return await this.roleService.delete({ id: roleId });
  }
}
