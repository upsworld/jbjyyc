import { Component, HostListener } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ExamplePdfViewerComponent } from './example-pdf-viewer/example-pdf-viewer.component';
import { SlcAblageComponent } from './ablage-component/ablage-component.component';
import { SlDocuments } from './model/document-model';

/** Constants used to fill up our data base. */
const FRUITS: string[] = [
  '/Vertrag/Objekt Lieferant/Rechnung',
  '/Allgemein/Schriftverkehr',
  '/43533433/1/Unterlagen/Sonstiges Unterlagen',
  '/Vertrag/Unterlagen/Zahlungsauftrag',
  '/Vertrag/Unterlagen/Vertragsabrechnung',
];
const NAMES: string[] = [
  'Mietkauf',
  'Leasing',
  'Übernahmebestätigung',
  'Gesamtübersicht nach Abrechnung',
  'Abrechnung/Mietkaufvertrag/01/2012 Zahlungsplan',
];

@Component({
  selector: 'main-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  isDragging = false;
  documents: SlDocuments[];

  @HostListener('dragenter', ['$event ']) onDragenter(evt: any) {
    evt.preventDefault();
    evt.stopPropagation();
    console.log('dragenter');
    this.isDragging = true;
  }

  constructor(private dialog: MatDialog) {
    // Create 100 users
    let time = Date.now();
    this.documents = Array.from({ length: 100 }, (_, k) => {
      time -= Math.round(Math.random() * 86400000 * 3);
      return createNewUser(k + 1, time);
    });
  }

  openDialog() {
    this.dialog.open(ExamplePdfViewerComponent);
  }

  openDocument() {
    this.dialog.open(SlcAblageComponent, {
      data: [this.documents[0]],
    });
  }

  onDragleave(evt: any) {
    evt.preventDefault();
    evt.stopPropagation();
    console.log('dragleave');
    this.isDragging = false;
  }
}

/** Builds and returns a new User. */
function createNewUser(id: number, time: number): SlDocuments {
  let name = NAMES[Math.round(Math.random() * (NAMES.length - 1))];

  const counter = Math.round(Math.random() * 6);
  if (counter > 1) {
    name += ' (' + counter.toString() + ')';
  }

  return {
    time: time.toString(),
    name: name,
    progress: Math.round(Math.random() * 100).toString(),
    schlagwort: FRUITS[Math.round(Math.random() * (FRUITS.length - 1))],
    type: 'documents',
  };
}
