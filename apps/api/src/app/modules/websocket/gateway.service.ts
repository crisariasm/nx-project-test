import { Injectable } from '@nestjs/common';
import { InjectQueue } from '@nestjs/bull';
import { Queue } from 'bull';
import { queuePool } from '../../shared/bull-board/bull-board';
import { Multer } from 'multer'

@Injectable()
export class GatewayService {
	constructor(
		@InjectQueue('image') private readonly imageQueue: Queue,
	  ) { 
		queuePool.add(this.imageQueue); 
	}

	  async processImage(file: Express.Multer.File) {
		const job = await this.imageQueue.add('webSocketTest', file);
		console.log(job.id)
		return {
		  jobId: job.id
		}
	  }
}