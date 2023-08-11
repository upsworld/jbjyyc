import { Component, HostListener } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ExamplePdfViewerComponent } from './example-pdf-viewer/example-pdf-viewer.component';
import { SlcAblageComponentComponent } from './ablage-component/ablage-component.component';

@Component({
  selector: 'main-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  isDragging = false;

  @HostListener('dragenter', ['$event ']) onDragenter(evt: any) {
    evt.preventDefault();
    evt.stopPropagation();
    console.log('dragenter');
    this.isDragging = true;
  }

  constructor(private dialog: MatDialog) {}

  openDialog() {
    this.dialog.open(ExamplePdfViewerComponent);
  }

  openDocument() {
    this.dialog.open(SlcAblageComponentComponent);
  }

  onDragleave(evt: any) {
    evt.preventDefault();
    evt.stopPropagation();
    console.log('dragleave');
    this.isDragging = false;
  }
}
