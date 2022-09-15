import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { ConfigService } from '@nestjs/config';
import { join } from 'path';

export const defaultConnection = (
	config: ConfigService
): TypeOrmModuleOptions => ({
	ssl: false,
      type: 'postgres',
      host: 'containers-us-west-41.railway.app',
      username: 'postgres',
      password: 'PvT6Yo010xtvo8PahTwe',
      port: 6294,
      database: 'railway',
      entities: [
		join("dist/apps/api/src/app/modules/**/*.entity.ts")
      ],
      synchronize: true,
      retryDelay: 3000,
      retryAttempts: 10,
	   autoLoadEntities: true
});