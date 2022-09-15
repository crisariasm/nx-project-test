/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */
import * as morgan from 'morgan';
import { ClassSerializerInterceptor, Logger, ValidationPipe } from '@nestjs/common';
import { NestFactory, Reflector } from '@nestjs/core';
import { ExpressAdapter, NestExpressApplication } from '@nestjs/platform-express';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app/app.module';
import { HttpExceptionFilter } from './app/shared/exceptions/http-exception.filter';
import { TransformInterceptor } from './app/shared/interceptors/transform.interceptor';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(
		AppModule,
		new ExpressAdapter(),
		{
			cors: true,
		}
	);
	
	const configService = app.get(ConfigService);
	const port = configService.get<number>('API_PORT') || 3333;
	const prefix = configService.get<string>('API_PREFIX') ?? 'api';
	const reflector = app.get(Reflector);
	const options = new DocumentBuilder()
		.setTitle('Nx project')
		.setDescription('API description')
		.setVersion('1.0')
		.addTag('Nx project')
		.build();

	const document = SwaggerModule.createDocument(app, options);
	SwaggerModule.setup('api/documentation', app, document);

  // app.use(helmet()); // HTTP HEADERS
	// app.use(compression());
	app.use(morgan('combined')); // LOGGER
 
  app.useGlobalFilters(new HttpExceptionFilter());
	app.useGlobalInterceptors(
		new ClassSerializerInterceptor(reflector),
		new TransformInterceptor()
		);
	app.useGlobalPipes(new ValidationPipe());
	app.setGlobalPrefix(prefix);

  await app.listen(port);

  Logger.log(
    `🚀 Application is running on: https://nx-project-test-production.up.railway.app/`
  );
  Logger.log(
		`👁️  Swagger at http://localhost:${port}/api/documentation`
		);
}

bootstrap();
