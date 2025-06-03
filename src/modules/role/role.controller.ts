import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { RoleService } from './role.service';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
import { ResponseMessage } from 'src/common/decorators/response-message.decorator';
import { RoleMessages } from './constants/role.messages';

@Controller('roles')
export class RoleController {
  constructor(private readonly roleService: RoleService) {}

  @Post()
  @ResponseMessage(RoleMessages.SUCCESS.CREATED)
  async create(@Body() createRoleDto: CreateRoleDto) {
    return await this.roleService.create(createRoleDto);
  }

  @Get()
  @ResponseMessage(RoleMessages.SUCCESS.FOUND_ALL)
  async findAll() {
    return await this.roleService.findAll();
  }

  @Get(':roleId')
  @ResponseMessage(RoleMessages.SUCCESS.FOUND)
  async findOne(@Param('roleId') roleId: number) {
    return await this.roleService.findOne({ id: roleId });
  }

  @Patch(':roleId')
  @ResponseMessage(RoleMessages.SUCCESS.UPDATED)
  async update(
    @Param('roleId') roleId: number,
    @Body() updateRoleDto: UpdateRoleDto,
  ) {
    return await this.roleService.update({ id: roleId }, updateRoleDto);
  }

  @Delete(':roleId')
  @ResponseMessage(RoleMessages.SUCCESS.DELETED)
  async remove(@Param('roleId') roleId: number) {
    return await this.roleService.delete({ id: roleId });
  }
}
