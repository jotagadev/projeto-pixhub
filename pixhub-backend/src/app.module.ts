import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './modules/user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { config } from '../config/database.config';
import { AuthModule } from './modules/auth/auth.module';
import { PhotosModule } from './modules/photos/photos.module';
import { ConfigModule } from '@nestjs/config';
import * as cors from 'cors';

@Module({
  imports: [
    TypeOrmModule.forRoot(config),
    AuthModule,
    UserModule,
    PhotosModule,
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: './.env',
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(cors())
      .forRoutes('*'); 
  }
}
