import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { UserRoleService } from './user-role.service';
import { CreateUserRoleDto } from './dto/create-user-role.dto';
import { ResponseMessage } from 'src/common/decorators/response-message.decorator';
import { UserRoleMessages } from './constants/user-role.messages';

@Controller('user-role')
export class UserRoleController {
  constructor(private readonly userRoleService: UserRoleService) {}

  @Post()
  @ResponseMessage(UserRoleMessages.SUCCESS.CREATED)
  async create(@Body() { roleId, userId }: CreateUserRoleDto) {
    return await this.userRoleService.create({
      role: { connect: { id: roleId } },
      user: { connect: { id: userId } },
    });
  }

  @Get()
  @ResponseMessage(UserRoleMessages.SUCCESS.FOUND_ALL)
  async findAll() {
    return await this.userRoleService.findAll();
  }

  @Get('role/:roleId/user/:userId')
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
