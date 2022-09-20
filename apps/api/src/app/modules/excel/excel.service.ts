import { Injectable } from '@nestjs/common';
import reader = require('xlsx');

@Injectable()
export class ExcelService {
	
	async uploadFile(file: Express.Multer.File) {
		const workbook = reader.read(file.buffer, {cellDates: true});
		const workbookSheets = workbook.SheetNames;
		const sheet = workbookSheets[0];
		const dataExcel = reader.utils.sheet_to_json(workbook.Sheets[sheet]);
		return dataExcel;
	}
}