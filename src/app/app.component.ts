import { Component, ViewChild } from '@angular/core';
import { StimulsoftViewerComponent } from 'stimulsoft-viewer-angular';
import { Input } from '@angular/core';
//import { ConfigurationService } from './Services/configuration.service';
import { ReportConfiguration } from '../models/reportConfiguration';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ClientApp';
  reportConfiguration : ReportConfiguration = {
    report: 'StaffAddress'
  //  ,
  //  dataSourceName: 'DataTable'
  }

  loaded(): void {
    console.log('Report loaded');
  }

  export(event: any): void {
    console.log(`Export to: ${event.exportFormat}`);
  }

  error(event: any): void {
    console.log(`Error Message: ${event.error}`);
  }

  email(event: any): void {
    console.log(`Email: ${event.exportFormat}`);
  }

  print(event: any): void {
    console.log(`Print to: ${event.format}`);
  }
}
