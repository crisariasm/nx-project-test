import { BullModule } from '@nestjs/bull';
import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { Gateway } from './gateway';
import { GatewayController } from './gateway.controller';
import { GatewayService } from './gateway.service';
import { ImageProcessor } from './processor/queue';

@Module({
	imports: [
		BullModule.forRootAsync({
				imports: [ConfigModule],
				useFactory: async (configService: ConfigService) => ({
					redis: {
						host: configService.get('REDIS_HOST'),
						port: Number(configService.get('REDIS_PORT')),
					},
				}),
				inject: [ConfigService],
			}),
			BullModule.registerQueue({
				name: 'image',
			}),
	  ],
	providers: [GatewayService, ImageProcessor, Gateway],
	controllers: [GatewayController]
})
export class GatewayModule {}
