import { Logger, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

import { AppModule } from './app/app.module';
import { EntityNotFoundExceptionFilter } from './app/utils/entity-not-found-exception.filter';
import { environment } from './environments/environment.prod';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    allowedHeaders: '*',
    origin: process.env.API_GLOBAL_CORS_ALLOWED_ORIGIN,
    credentials: true,
  });

  const port = process.env.PORT || 3333;

  app.useGlobalFilters(new EntityNotFoundExceptionFilter());
  // Request body validation
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      // Strip data of properties without decorators
      whitelist: true,

      // Throw an error if non-whitelisted values are provided
      forbidNonWhitelisted: true,

      // Throw an error if unknown values are provided
      forbidUnknownValues: true,
    })
  );

  // Swagger Ui
  const config = new DocumentBuilder()
    .setTitle('Omnihost Systems API')
    .setDescription('The auto-generated documentation of the API')
    .setVersion('0.1')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(port);

  Logger.log(
    `Omnihost API is running on: http://localhost:${port} in environment: ${environment.env}`
  );
}

bootstrap();
