import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { ConfigService } from '@nestjs/config';
import { join } from 'path';

export const defaultConnection = (
	config: ConfigService
): TypeOrmModuleOptions => ({
	ssl: false,
      type: 'postgres',
      host: 'localhost',
      username: 'postgres',
      password: 'postgres',
      port: 5432,
      database: 'prueba',
      entities: [
		join("dist/apps/api/src/app/modules/**/*.entity.ts")
      ],
      synchronize: true,
      retryDelay: 3000,
      retryAttempts: 10,
	  autoLoadEntities: true
});