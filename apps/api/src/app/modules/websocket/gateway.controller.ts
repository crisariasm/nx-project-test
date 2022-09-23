import { Controller, Post, Sse, UploadedFiles, UseInterceptors } from '@nestjs/common';
import { AnyFilesInterceptor } from '@nestjs/platform-express';
import { Express } from 'express';
import { GatewayService } from './gateway.service';

@Controller('gateway-queues')
export class GatewayController {

	constructor(private gatewayService: GatewayService ) { }

	@UseInterceptors(AnyFilesInterceptor())
	@Post('image')
	processImage(@UploadedFiles() file: Express.Multer.File){
		return this.gatewayService.processImage(file);
	}
 }