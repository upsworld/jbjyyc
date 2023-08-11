import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TableOverviewExample } from './example/table-overview-example';
import { FilterTreeComponent } from './filter-tree/filter-tree.component';
import { MatIconModule } from '@angular/material/icon';
import { ExamplePdfViewerComponent } from './example-pdf-viewer/example-pdf-viewer.component';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';
import { MatDialogModule } from '@angular/material/dialog';

/* the AppModule class with the @NgModule decorator */
@NgModule({
  declarations: [AppComponent, ExamplePdfViewerComponent],
  imports: [
    FilterTreeComponent,
    BrowserModule,
    TableOverviewExample,
    BrowserAnimationsModule,
    MatIconModule,
    NgxExtendedPdfViewerModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
