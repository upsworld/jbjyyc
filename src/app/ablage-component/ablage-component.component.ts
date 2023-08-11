import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'slc-document-ablage-component',
  templateUrl: './ablage-component.component.html',
  styleUrls: ['./ablage-component.component.scss'],
})
export class SlcAblageComponentComponent {
  constructor(private dialogRef: MatDialogRef<SlcAblageComponentComponent>) {}

  cancel() {
    this.dialogRef.close();
  }
}
