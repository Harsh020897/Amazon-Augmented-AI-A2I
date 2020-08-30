import './polyfills';

import {HttpClientModule} from '@angular/common/http';
import {NgModule, Injector} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { Home } from './app/home/home.component';
import { MaterialModule } from './app/material/material.module';
import { ImageViewerModule } from "ngx-image-viewer";
import { AutosizeModule } from 'ngx-autosize';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MaterialModule,
    ImageViewerModule.forRoot(),
    AutosizeModule
  ],
  entryComponents: [Home],
  declarations: [Home],
  bootstrap: [Home]
})
export class AppModule {
  constructor(private injector: Injector) {
  }
}

platformBrowserDynamic().bootstrapModule(AppModule);
