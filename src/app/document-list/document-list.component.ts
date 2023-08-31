import {Component, HostListener} from '@angular/core';
import {SlDocuments} from "../model/document-model";
import {MatDialog} from "@angular/material/dialog";
import {ExamplePdfViewerComponent} from "../example-pdf-viewer/example-pdf-viewer.component";
import {SlcAblageComponent} from "../ablage-component/ablage-component.component";
import {Router} from "@angular/router";

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

const VERTRAGSNUMMERN: string[] = [
  '46546466 / 1',
  '46546466 / 2',
  '33434333',
  '',
  '',
];

@Component({
  selector: 'app-document-list',
  templateUrl: './document-list.component.html',
  styleUrls: ['./document-list.component.scss']
})
export class DocumentListComponent {
  isDragging = false;
  documents: SlDocuments[];
  windowsCreated = 0;

  @HostListener('dragenter', ['$event ']) onDragenter(evt: any) {
    evt.preventDefault();
    evt.stopPropagation();
    console.log('dragenter');
    this.isDragging = true;
  }

  @HostListener('drop', ['$event ']) onDrop(evt: any) {
    evt.preventDefault();
    evt.stopPropagation();
    //this.openDocument();
    this.isDragging = false;
  }
  constructor(private dialog: MatDialog, private router: Router) {
    // Create 100 users
    let time = Date.now();
    this.documents = Array.from({ length: 100 }, (_, k) => {
      time -= Math.round(Math.random() * 86400000 * 3);
      return createNewUser(k + 1, time);
    });

    // how to solve this? these need to be removed when this component is
    // destroyed - at least
    window.addEventListener(
        'dragover',
        function (e) {
          e = e || event;
          e.preventDefault();
        },
        false
    );
    window.addEventListener(
        'drop',
        function (e) {
          e = e || event;
          e.preventDefault();
        },
        false
    );
  }

  openDialog() {
    this.dialog.open(ExamplePdfViewerComponent);
  }

  openDocument(document: SlDocuments) {
    //const width =

    const url = this.router.createUrlTree(['./detail'])
    window.open(
        url.toString(),
        'winname' + this.windowsCreated.toString(),
        'directories=no,titlebar=no,toolbar=no,location=no,status=no,menubar=no,scrollbars=no,resizable=no, navigator=no'
    );

    this.windowsCreated += 1;
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

