import { Module } from '@nestjs/common';
import { CatService } from './cat.service';
import { CatController } from './cat.controller';
import { PermissionsGuard } from 'src/common/guards/permissions.guard';
import { APP_GUARD } from '@nestjs/core';

@Module({
  controllers: [CatController],
  providers: [
    CatService,
    {
      provide: APP_GUARD,
      useClass: PermissionsGuard,
    },
  ],
})
export class CatModule {}
