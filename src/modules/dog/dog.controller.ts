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

@Controller('dogs')
export class DogController {
  constructor(private readonly dogService: DogService) {}

  @Post()
  @RequirePermissions(DogPermission.CREATE)
  create(@Body() createDogDto: CreateDogDto) {
    return this.dogService.create(createDogDto);
  }

  @Get()
  @RequirePermissions(DogPermission.READ)
  findAll() {
    return this.dogService.findAll();
  }

  @Get(':id')
  @RequirePermissions(DogPermission.READ)
  findOne(@Param('id') id: string) {
    return this.dogService.findOne(+id);
  }

  @Patch(':id')
  @RequirePermissions(DogPermission.UPDATE)
  update(@Param('id') id: string, @Body() updateDogDto: UpdateDogDto) {
    return this.dogService.update(+id, updateDogDto);
  }

  @Delete(':id')
  @RequirePermissions(DogPermission.DELETE)
  remove(@Param('id') id: string) {
    return this.dogService.remove(+id);
  }
}
