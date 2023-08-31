import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TableOverviewExample } from './example/table-overview-example';
import { FilterTreeComponent } from './filter-tree/filter-tree.component';
import { MatIconModule } from '@angular/material/icon';

import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';
import { MatDialogModule } from '@angular/material/dialog';
import { SlcAblageComponent } from './ablage-component/ablage-component.component';
import { ExamplePdfViewerComponent } from './example-pdf-viewer/example-pdf-viewer.component';
import { MatButtonModule } from '@angular/material/button';
import { DocumentDetailComponent } from './document-detail/document-detail.component';
import { DocumentHeaderComponent } from './document-header/document-header.component';
import { DocumentMetaComponent } from './document-meta/document-meta.component';
import { ExpansionPanelListComponent } from "./expansion-panel-list/expansion-panel-list.component";
import { SloDataModule} from "./data/slo-data.module";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatOptionModule } from "@angular/material/core";
import { MatSelectModule } from "@angular/material/select";
import { MatInputModule } from "@angular/material/input";
import { TextFieldModule } from "@angular/cdk/text-field";
import { MatBottomSheetModule } from "@angular/material/bottom-sheet";
import { BenutzerDisplayComponent } from "./benutzer-display/benutzer-display.component";
import { AppRoutingModule } from './app-routing.module';
import { DocumentListComponent } from './document-list/document-list.component';
import { MatMenuModule } from "@angular/material/menu";
import { MatTooltipModule } from "@angular/material/tooltip";

/* the AppModule class with the @NgModule decorator */
@NgModule({
  declarations: [AppComponent, ExamplePdfViewerComponent, SlcAblageComponent, DocumentDetailComponent, DocumentHeaderComponent, DocumentMetaComponent, DocumentListComponent],
    imports: [
        FilterTreeComponent,
        BrowserModule,
        TableOverviewExample,
        BrowserAnimationsModule,
        MatIconModule,
        NgxExtendedPdfViewerModule,
        MatDialogModule,
        MatButtonModule,
        ExpansionPanelListComponent,
        SloDataModule,
        MatFormFieldModule,
        MatOptionModule,
        MatSelectModule,
        MatInputModule,
        TextFieldModule,
        MatBottomSheetModule,
        BenutzerDisplayComponent,
        AppRoutingModule,
        MatMenuModule,
        MatTooltipModule
    ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
