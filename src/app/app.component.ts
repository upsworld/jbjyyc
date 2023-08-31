import { Component, HostListener } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ExamplePdfViewerComponent } from './example-pdf-viewer/example-pdf-viewer.component';
import { SlcAblageComponent } from './ablage-component/ablage-component.component';
import { SlDocuments } from './model/document-model';

@Component({
  selector: 'main-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

}
