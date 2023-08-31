import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-document-meta',
  templateUrl: './document-meta.component.html',
  styleUrls: ['./document-meta.component.scss']
})
export class DocumentMetaComponent {
  @Output() metaChanged = new EventEmitter();
}
