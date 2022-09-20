import { Controller, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiBody, ApiConsumes } from '@nestjs/swagger';
import { Multer } from 'multer';
import { ExcelService } from './excel.service';

@Controller('excel')
export class ExcelController {
	
	constructor(private excelService: ExcelService) {}

	@ApiConsumes('multipart/form-data')
	@ApiBody({
		type: 'multipart/form-data',
		required: true,
		schema: {
			type: 'object',
			properties: {
				file: {
					type: 'file',
					format: 'binary'
				},
			}
		}
	})
	@UseInterceptors(FileInterceptor('file'))
	@Post()
	readExcelDocument(@UploadedFile() file: Express.Multer.File) {
		return this.excelService.uploadFile(file);
	}
}
