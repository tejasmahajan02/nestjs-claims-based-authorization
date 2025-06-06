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
import { DogService } from './dog.service';
import { CreateDogDto } from './dto/create-dog.dto';
import { UpdateDogDto } from './dto/update-dog.dto';
import { RequirePermissions } from 'src/common/decorators/require-permissions.decorator';
import { DogPermission } from './enum/dog-permission.enum';
import { ResponseMessage } from 'src/common/decorators/response-message.decorator';
import { DogMessages } from './constants/dog.messages';
import { HttpCacheInterceptor } from 'src/common/interceptors/http-cache.interceptor';
import { Paginated } from 'src/common/decorators/paginated.decorator';

@Controller('dogs')
export class DogController {
  constructor(private readonly dogService: DogService) {}

  @Post()
  @RequirePermissions(DogPermission.CREATE)
  @ResponseMessage(DogMessages.SUCCESS.CREATED)
  create(@Body() createDogDto: CreateDogDto) {
    return this.dogService.create(createDogDto);
  }

  @Get()
  @UseInterceptors(HttpCacheInterceptor)
  @RequirePermissions(DogPermission.READ)
  @ResponseMessage(DogMessages.SUCCESS.FOUND_ALL)
  @Paginated()
  findAll() {
    return this.dogService.findAll();
  }

  @Get(':dogId')
  @RequirePermissions(DogPermission.READ)
  @ResponseMessage(DogMessages.SUCCESS.FOUND)
  findOne(@Param('dogId') dogId: string) {
    return this.dogService.findOne(+dogId);
  }

  @Patch(':dogId')
  @RequirePermissions(DogPermission.UPDATE)
  @ResponseMessage(DogMessages.SUCCESS.UPDATED)
  update(@Param('dogId') dogId: string, @Body() updateDogDto: UpdateDogDto) {
    return this.dogService.update(+dogId, updateDogDto);
  }

  @Delete(':dogId')
  @RequirePermissions(DogPermission.DELETE)
  @ResponseMessage(DogMessages.SUCCESS.DELETED)
  remove(@Param('dogId') dogId: string) {
    return this.dogService.remove(+dogId);
  }
}
