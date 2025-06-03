import { NestFactory, Reflector } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger, ValidationPipe } from '@nestjs/common';
import { TransformInterceptor } from './common/interceptors/transform.interceptor';
import { PrismaExceptionFilter } from './common/filters/prisma-exception.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // strips any properties not defined in the DTO
      forbidNonWhitelisted: true, // throws an error if extra properties are present,
      transform: true,
    }),
  );

  app.useGlobalFilters(new PrismaExceptionFilter());

  const reflector = app.get(Reflector);
  app.useGlobalInterceptors(new TransformInterceptor(reflector));

  const port = process.env.NODE_PORT || 3000;
  await app.listen(port);

  Logger.log(
    `Application is running on ${await app.getUrl()}`,
    'NestApplication',
  );
}
bootstrap();
