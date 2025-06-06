import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  UseInterceptors,
} from '@nestjs/common';
import { UserRoleService } from './user-role.service';
import { CreateUserRoleDto } from './dto/create-user-role.dto';
import { ResponseMessage } from 'src/common/decorators/response-message.decorator';
import { UserRoleMessages } from './constants/user-role.messages';
import { UserRolePermission } from './enum/user-role-permission.enum';
import { RequirePermissions } from 'src/common/decorators/require-permissions.decorator';
import { HttpCacheInterceptor } from 'src/common/interceptors/http-cache.interceptor';
import { Paginated } from 'src/common/decorators/paginated.decorator';

@Controller('user-role')
export class UserRoleController {
  constructor(private readonly userRoleService: UserRoleService) {}

  @Post()
  @RequirePermissions(UserRolePermission.CREATE)
  @ResponseMessage(UserRoleMessages.SUCCESS.CREATED)
  async create(@Body() { roleId, userId }: CreateUserRoleDto) {
    return await this.userRoleService.create({
      role: { connect: { id: roleId } },
      user: { connect: { id: userId } },
    });
  }

  @Get()
  @UseInterceptors(HttpCacheInterceptor)
  @RequirePermissions(UserRolePermission.READ)
  @ResponseMessage(UserRoleMessages.SUCCESS.FOUND_ALL)
  @Paginated()
  async findAll() {
    return await this.userRoleService.findAll();
  }

  @Get('role/:roleId/user/:userId')
  @RequirePermissions(UserRolePermission.READ)
  @ResponseMessage(UserRoleMessages.SUCCESS.FOUND)
  async findOne(
    @Param('userId') userId: number,
    @Param('roleId') roleId: number,
  ) {
    return await this.userRoleService.findOne({
      roleId_userId: { roleId, userId },
    });
  }

  @Delete('role/:roleId/user/:userId')
  @RequirePermissions(UserRolePermission.DELETE)
  @ResponseMessage(UserRoleMessages.SUCCESS.DELETED)
  async remove(
    @Param('userId') userId: number,
    @Param('roleId') roleId: number,
  ) {
    return await this.userRoleService.delete({
      roleId_userId: { roleId, userId },
    });
  }
}
