import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'slc-document-ablage-component',
  templateUrl: './ablage-component.component.html',
  styleUrls: ['./ablage-component.component.scss'],
})
export class SlcAblageComponent {
  constructor(private dialogRef: MatDialogRef<SlcAblageComponent>) {}

  cancel() {
    this.dialogRef.close();
  }
}
