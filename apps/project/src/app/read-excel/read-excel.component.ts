import { Component } from '@angular/core';
import * as XLSX from 'xlsx';

@Component({
  selector: 'nx-project-test-read-excel',
  templateUrl: './read-excel.component.html',
  styleUrls: ['./read-excel.component.scss'],
})
export class ReadExcelComponent {
  title = 'excel-to-json';
  convertedJson!: string;

  fileUpload(event: any) {
    console.log(event.target.files)
    const selectedFile = event.target.files[0];
    const fileReader = new FileReader();
    fileReader.readAsBinaryString(selectedFile); 
    fileReader.onload = (event) => {
    console.log(event);
    const binaryData = event.target?.result;
    const workbook = XLSX.read(binaryData, { type: 'binary' });
    workbook.SheetNames.forEach(sheet => {
      const data = XLSX.utils.sheet_to_json(workbook.Sheets[sheet]);
      console.log(data);
      this.convertedJson = JSON.stringify(data, undefined, 4)
    })
    console.log(workbook)
    }
  }
}
