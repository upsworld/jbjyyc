import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TableOverviewExample } from 'src/example/table-overview-example';
import { FilterTreeComponent } from 'src/filter-tree/filter-tree.component';
import { MatIconModule } from '@angular/material/icon';

/* the AppModule class with the @NgModule decorator */
@NgModule({
  declarations: [AppComponent],
  imports: [
    FilterTreeComponent,
    BrowserModule,
    TableOverviewExample,
    BrowserAnimationsModule,
    MatIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
