import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  Query,
  Patch,
  Delete,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { ResponseMessage } from 'src/common/decorators/response-message.decorator';
import { UserMessages } from './constants/user.messages';
import { UserService } from './user.service';
import { UpdateUserDto } from './dto/update-user.dto';
import { Paginated } from 'src/common/decorators/paginated.decorator';
import { PaginatedResult } from 'src/common/types/paginated-result.type';
import { User } from 'generated/prisma';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  @ResponseMessage(UserMessages.SUCCESS.CREATED)
  async create(@Body() createUserDto: CreateUserDto) {
    return await this.userService.create(createUserDto);
  }

  @Get()
  @ResponseMessage(UserMessages.SUCCESS.FOUND_ALL)
  @Paginated()
  async findAll(
    @Query('take') take: number = 5,
  ): Promise<PaginatedResult<User>> {
    return { data: await this.userService.paginate({ take }), meta: { take } };
  }

  @Get(':userId')
  @ResponseMessage(UserMessages.SUCCESS.FOUND)
  async findOne(@Param('userId') userId: number) {
    return await this.userService.findOne({ id: userId });
  }

  @Patch(':userId')
  @ResponseMessage(UserMessages.SUCCESS.UPDATED)
  async update(
    @Param('userId') userId: number,
    @Body() updateUserDto: UpdateUserDto,
  ) {
    return await this.userService.update({ id: userId }, updateUserDto);
  }

  @Delete(':userId')
  @ResponseMessage(UserMessages.SUCCESS.DELETED)
  async remove(@Param('userId') userId: number) {
    return await this.userService.delete({ id: userId });
  }
}
