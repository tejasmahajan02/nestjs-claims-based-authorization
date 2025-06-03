import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CatService } from './cat.service';
import { CreateCatDto } from './dto/create-cat.dto';
import { UpdateCatDto } from './dto/update-cat.dto';
import { RequirePermissions } from 'src/common/decorators/require-permissions.decorator';
import { CatPermission } from './enum/cat-permissions.enum';

@Controller('cats')
export class CatController {
  constructor(private readonly catService: CatService) {}

  @Post()
  @RequirePermissions(CatPermission.CREATE)
  create(@Body() createCatDto: CreateCatDto) {
    return this.catService.create(createCatDto);
  }

  @Get()
  @RequirePermissions(CatPermission.READ)
  findAll() {
    return this.catService.findAll();
  }

  @Get(':id')
  @RequirePermissions(CatPermission.READ)
  findOne(@Param('id') id: string) {
    return this.catService.findOne(+id);
  }

  @Patch(':id')
  @RequirePermissions(CatPermission.UPDATE)
  update(@Param('id') id: string, @Body() updateCatDto: UpdateCatDto) {
    return this.catService.update(+id, updateCatDto);
  }

  @Delete(':id')
  @RequirePermissions(CatPermission.DELETE)
  remove(@Param('id') id: string) {
    return this.catService.remove(+id);
  }
}
