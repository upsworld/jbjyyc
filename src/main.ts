import { importProvidersFrom } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { VERSION as CDK_VERSION } from '@angular/cdk';
import {
  VERSION as MAT_VERSION,
  MatNativeDateModule,
} from '@angular/material/core';
import { TableOverviewExample } from './example/table-overview-example';
import { AppModule } from './app/app.module';
import { AppComponent } from './app/app.component';

/* eslint-disable no-console */
console.info('Angular CDK version', CDK_VERSION.full);
console.info('Angular Material version', MAT_VERSION.full);

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err));
