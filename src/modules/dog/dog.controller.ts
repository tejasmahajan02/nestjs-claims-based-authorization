import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { DogService } from './dog.service';
import { CreateDogDto } from './dto/create-dog.dto';
import { UpdateDogDto } from './dto/update-dog.dto';
import { RequirePermissions } from 'src/common/decorators/require-permissions.decorator';
import { DogPermission } from './enum/dog-permissions.enum';
import { ResponseMessage } from 'src/common/decorators/response-message.decorator';
import { DogMessages } from './constants/dog.messages';

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
  @RequirePermissions(DogPermission.READ)
  @ResponseMessage(DogMessages.SUCCESS.FOUND_ALL)
  findAll() {
    return this.dogService.findAll();
  }

  @Get(':id')
  @RequirePermissions(DogPermission.READ)
  @ResponseMessage(DogMessages.SUCCESS.FOUND)
  findOne(@Param('id') id: string) {
    return this.dogService.findOne(+id);
  }

  @Patch(':id')
  @RequirePermissions(DogPermission.UPDATE)
  @ResponseMessage(DogMessages.SUCCESS.UPDATED)
  update(@Param('id') id: string, @Body() updateDogDto: UpdateDogDto) {
    return this.dogService.update(+id, updateDogDto);
  }

  @Delete(':id')
  @RequirePermissions(DogPermission.DELETE)
  @ResponseMessage(DogMessages.SUCCESS.DELETED)
  remove(@Param('id') id: string) {
    return this.dogService.remove(+id);
  }
}
