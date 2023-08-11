import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { SlDocuments } from '../model/document-model';

@Component({
  selector: 'slc-document-ablage-component',
  templateUrl: './ablage-component.component.html',
  styleUrls: ['./ablage-component.component.scss'],
})
export class SlcAblageComponent {
  constructor(
    private dialogRef: MatDialogRef<SlcAblageComponent>,
    @Inject(MAT_DIALOG_DATA) public data: SlDocuments[]
    ) {}

  cancel() {
    this.dialogRef.close();
  }
}
