import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  Query,
  Patch,
  Delete,
  UseInterceptors,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { ResponseMessage } from 'src/common/decorators/response-message.decorator';
import { UserMessages } from './constants/user.messages';
import { UserService } from './user.service';
import { UpdateUserDto } from './dto/update-user.dto';
import { Paginated } from 'src/common/decorators/paginated.decorator';
import { PaginatedResult } from 'src/common/types/paginated-result.type';
import { User } from 'generated/prisma';
import { UserPermission } from './enum/user-permission.enum';
import { RequirePermissions } from 'src/common/decorators/require-permissions.decorator';
import { HttpCacheInterceptor } from 'src/common/interceptors/http-cache.interceptor';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  @RequirePermissions(UserPermission.CREATE)
  @ResponseMessage(UserMessages.SUCCESS.CREATED)
  async create(@Body() createUserDto: CreateUserDto) {
    return await this.userService.create(createUserDto);
  }

  @Get()
  @UseInterceptors(HttpCacheInterceptor)
  @RequirePermissions(UserPermission.READ)
  @ResponseMessage(UserMessages.SUCCESS.FOUND_ALL)
  @Paginated()
  async findAll(
    @Query('take') take: number = 5,
  ): Promise<PaginatedResult<User>> {
    return { data: await this.userService.paginate({ take }), meta: { take } };
  }

  @Get(':userId')
  @RequirePermissions(UserPermission.READ)
  @ResponseMessage(UserMessages.SUCCESS.FOUND)
  async findOne(@Param('userId') userId: number) {
    return await this.userService.findOne({ id: userId });
  }

  @Patch(':userId')
  @RequirePermissions(UserPermission.UPDATE)
  @ResponseMessage(UserMessages.SUCCESS.UPDATED)
  async update(
    @Param('userId') userId: number,
    @Body() updateUserDto: UpdateUserDto,
  ) {
    return await this.userService.update({ id: userId }, updateUserDto);
  }

  @Delete(':userId')
  @RequirePermissions(UserPermission.DELETE)
  @ResponseMessage(UserMessages.SUCCESS.DELETED)
  async remove(@Param('userId') userId: number) {
    return await this.userService.delete({ id: userId });
  }
}
