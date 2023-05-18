import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { ScheduleModule } from '@nestjs/schedule';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AnnouncementsModule } from './announcements/announcements.module';
import { AppController } from './app.controller';
import { AssignmentsModule } from './assignments/assignments.module';
import { AuthModule } from './auth/auth.module';
import { BikeModule } from './bikes/bikes.module';
import { BlacklistModule } from './blacklist/blacklist.module';
import { CarsModule } from './cars/cars.module';
import { configService } from './config/config.service';
import { DocumentsModule } from './documents/documents.module';
import { ExportModule } from './export/export.module';
import { FilesModule } from './files/files.module';
import { LuggagesModule } from './luggages/luggages.module';
import { LoggerMiddleware } from './middleware/logging.middleware';
import { SentryInterceptor } from './middleware/sentry.interceptor';
import { TasksModule } from './tasks/tasks.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: ['../.env', '.env'] }),
    TypeOrmModule.forRoot(configService.getTypeOrmConfig()),
    ScheduleModule.forRoot(),
    AuthModule,
    UsersModule,
    LuggagesModule,
    CarsModule,
    TasksModule,
    AssignmentsModule,
    DocumentsModule,
    FilesModule,
    BikeModule,
    AnnouncementsModule,
    BlacklistModule,
    ExportModule,
  ],
  controllers: [AppController],
  providers: [
    {
      provide: APP_INTERCEPTOR,
      useClass: SentryInterceptor,
    },
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('*');
  }
}
