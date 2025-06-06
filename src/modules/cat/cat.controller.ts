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
import { CatService } from './cat.service';
import { CreateCatDto } from './dto/create-cat.dto';
import { UpdateCatDto } from './dto/update-cat.dto';
import { RequirePermissions } from 'src/common/decorators/require-permissions.decorator';
import { CatPermission } from './enum/cat-permission.enum';
import { ResponseMessage } from 'src/common/decorators/response-message.decorator';
import { CatMessages } from './constants/cat.messages';
import { Paginated } from 'src/common/decorators/paginated.decorator';
import { HttpCacheInterceptor } from 'src/common/interceptors/http-cache.interceptor';

@Controller('cats')
export class CatController {
  constructor(private readonly catService: CatService) {}

  @Post()
  @RequirePermissions(CatPermission.CREATE)
  @ResponseMessage(CatMessages.SUCCESS.CREATED)
  create(@Body() createCatDto: CreateCatDto) {
    return this.catService.create(createCatDto);
  }

  @Get()
  @UseInterceptors(HttpCacheInterceptor)
  @RequirePermissions(CatPermission.READ)
  @ResponseMessage(CatMessages.SUCCESS.FOUND_ALL)
  @Paginated()
  async findAll() {
    return this.catService.findAll();
  }

  @Get(':catId')
  @RequirePermissions(CatPermission.READ)
  @ResponseMessage(CatMessages.SUCCESS.FOUND)
  findOne(@Param('catId') catId: string) {
    return this.catService.findOne(+catId);
  }

  @Patch(':catId')
  @RequirePermissions(CatPermission.UPDATE)
  @ResponseMessage(CatMessages.SUCCESS.UPDATED)
  update(@Param('catId') catId: string, @Body() updateCatDto: UpdateCatDto) {
    return this.catService.update(+catId, updateCatDto);
  }

  @Delete(':catId')
  @RequirePermissions(CatPermission.DELETE)
  @ResponseMessage(CatMessages.SUCCESS.DELETED)
  remove(@Param('catId') catId: string) {
    return this.catService.remove(+catId);
  }
}
