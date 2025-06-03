import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { PermissionService } from './permission.service';
import { CreatePermissionDto } from './dto/create-permission.dto';
import { UpdatePermissionDto } from './dto/update-permission.dto';
import { ResponseMessage } from 'src/common/decorators/response-message.decorator';
import { PermissionMessages } from './constants/permission.messages';

@Controller('permissions')
export class PermissionController {
  constructor(private readonly permissionService: PermissionService) {}

  @Post()
  @ResponseMessage(PermissionMessages.SUCCESS.CREATED)
  async create(@Body() createPermissionDto: CreatePermissionDto) {
    return await this.permissionService.create(createPermissionDto);
  }

  @Get()
  @ResponseMessage(PermissionMessages.SUCCESS.FOUND_ALL)
  async findAll() {
    return await this.permissionService.findAll();
  }

  @Get(':permissionId')
  @ResponseMessage(PermissionMessages.SUCCESS.FOUND)
  async findOne(@Param('permissionId') permissionId: number) {
    return await this.permissionService.findOne({ id: permissionId });
  }

  @Patch(':permissionId')
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
  @ResponseMessage(PermissionMessages.SUCCESS.DELETED)
  async remove(@Param('permissionId') permissionId: number) {
    return await this.permissionService.delete({ id: permissionId });
  }
}
