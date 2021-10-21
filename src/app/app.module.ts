import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StimulsoftViewerModule } from 'stimulsoft-viewer-angular';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
//import { StimulsoftDesignerModule } from 'stimulsoft-designer-angular';

import { AppComponent } from './app.component';
//import { ConfigurationComponent } from './Components/configuration/configuration.component';

@NgModule({
  declarations: [
    AppComponent,
    //ConfigurationComponent,
  ],
  imports: [
    BrowserModule,
    StimulsoftViewerModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule
    //StimulsoftDesignerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
