import { Module } from '@nestjs/common';
import { DogService } from './dog.service';
import { DogController } from './dog.controller';
import { APP_GUARD } from '@nestjs/core';
import { PermissionsGuard } from 'src/common/guards/permissions.guard';

@Module({
  controllers: [DogController],
  providers: [
    DogService,
    {
      provide: APP_GUARD,
      useClass: PermissionsGuard,
    },
  ],
})
export class DogModule {}
