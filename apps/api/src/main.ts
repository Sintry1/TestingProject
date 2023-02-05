import { Logger, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import * as Sentry from '@sentry/node';
import '@sentry/tracing';
import { Integrations } from '@sentry/tracing';
import { AppModule } from './app/app.module';
import { EntityNotFoundExceptionFilter } from './app/utils/entity-not-found-exception.filter';
import { environment } from './environments/environment.prod';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    allowedHeaders: '*',
    origin: process.env.GLOBAL_CORS_ALLOWED_ORIGIN,
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

  // Sentry logging setup
  Sentry.init({
    dsn: process.env.API_SENTRY_DSN || '',
    environment: environment.env,
    debug: false,
    tracesSampleRate: parseInt(process.env.API_SENTRY_TRACING_SAMPLE_RATE) || 1.0,
    integrations: [new Integrations.Postgres(), new Sentry.Integrations.Http({ tracing: true })],
  });

  app.use(Sentry.Handlers.requestHandler());
  app.use(Sentry.Handlers.tracingHandler());
  Logger.log(
    `Sentry initialized in environment: ${environment.env}. Sample rate: ${
      parseInt(process.env.API_SENTRY_TRACING_SAMPLE_RATE) || 1.0
    }`
  );

  // Swagger Ui
  const config = new DocumentBuilder()
    .setTitle('Omnihost Systems API')
    .setDescription('The auto-generated documentation of the API')
    .setVersion('0.1')
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(port);

  Logger.log(
    `Omnihost API is running on: http://localhost:${port} in environment: ${environment.env}`
  );
}

bootstrap();
