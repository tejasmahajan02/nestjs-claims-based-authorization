import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { UserModule } from './modules/user/user.module';
import { RoleModule } from './modules/role/role.module';
import { PermissionModule } from './modules/permission/permission.module';
import { RolePermissionModule } from './modules/role-permission/role-permission.module';
import { UserRoleModule } from './modules/user-role/user-role.module';
import { CommonModule } from './common/common.module';
import { CatModule } from './modules/cat/cat.module';
import { DogModule } from './modules/dog/dog.module';
import { PermissionRegistryModule } from './modules/permission-registry/permission-registry.module';
import { CacheModule } from '@nestjs/cache-manager';
import { TenantModule } from './modules/tenant/tenant.module';
import { PermissionsGuard } from './common/guards/permissions.guard';
import { APP_GUARD } from '@nestjs/core';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    CacheModule.register({
      isGlobal: true,
      ttl: 60000, // milliseconds
    }),
    UserModule,
    RoleModule,
    PermissionModule,
    RolePermissionModule,
    UserRoleModule,
    CommonModule,
    CatModule,
    DogModule,
    PermissionRegistryModule,
    TenantModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_GUARD,
      useClass: PermissionsGuard,
    },
  ],
})
export class AppModule {}
