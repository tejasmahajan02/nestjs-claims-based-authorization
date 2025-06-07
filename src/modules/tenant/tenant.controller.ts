import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseInterceptors,
  Query,
} from '@nestjs/common';
import { TenantService } from './tenant.service';
import { CreateTenantDto } from './dto/create-tenant.dto';
import { UpdateTenantDto } from './dto/update-tenant.dto';
import { RequirePermissions } from 'src/common/decorators/require-permissions.decorator';
import { ResponseMessage } from 'src/common/decorators/response-message.decorator';
import { TenantPermission } from './enum/tenant-permission.enum';
import { TenantMessages } from './constants/tenant.messages';
import { Paginated } from 'src/common/decorators/paginated.decorator';
import { HttpCacheInterceptor } from 'src/common/interceptors/http-cache.interceptor';

@Controller('tenant')
export class TenantController {
  constructor(private readonly tenantService: TenantService) {}

  @Post()
  @RequirePermissions(TenantPermission.CREATE)
  @ResponseMessage(TenantMessages.SUCCESS.CREATED)
  async create(@Body() createTenantDto: CreateTenantDto) {
    return await this.tenantService.create(createTenantDto);
  }

  @Get()
  @UseInterceptors(HttpCacheInterceptor)
  @RequirePermissions(TenantPermission.READ)
  @ResponseMessage(TenantMessages.SUCCESS.FOUND_ALL)
  @Paginated()
  async findAll(@Query('take') take: number = 5) {
    return await this.tenantService.findAll();
  }

  @Get(':tenantId')
  @RequirePermissions(TenantPermission.READ)
  @ResponseMessage(TenantMessages.SUCCESS.FOUND)
  async findOne(@Param('tenantId') tenantId: number) {
    return await this.tenantService.findOne({ id: tenantId });
  }

  @Patch(':tenantId')
  @RequirePermissions(TenantPermission.UPDATE)
  @ResponseMessage(TenantMessages.SUCCESS.UPDATED)
  async update(
    @Param('tenantId') tenantId: number,
    @Body() updateTenantDto: UpdateTenantDto,
  ) {
    return await this.tenantService.update({ id: tenantId }, updateTenantDto);
  }

  @Delete(':tenantId')
  @RequirePermissions(TenantPermission.DELETE)
  @ResponseMessage(TenantMessages.SUCCESS.DELETED)
  async remove(@Param('tenantId') tenantId: number) {
    return await this.tenantService.delete({ id: tenantId });
  }
}
