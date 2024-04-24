import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({ transform: false }));

  app.enableCors();
  const port = app.get(ConfigService).get('PORT') || 3333;
  await app.listen(port);
}
bootstrap();
