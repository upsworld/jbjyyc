import {Component, TemplateRef, ViewChild} from '@angular/core';
import {MatBottomSheet, MatBottomSheetConfig} from "@angular/material/bottom-sheet";

@Component({
  selector: 'app-document-detail',
  templateUrl: './document-detail.component.html',
  styleUrls: ['./document-detail.component.scss']
})
export class DocumentDetailComponent {
  @ViewChild(TemplateRef) template: TemplateRef<any>;

  constructor(readonly bottomSheet: MatBottomSheet) {}

  showBottomSheet() {
    const config: MatBottomSheetConfig = {
      hasBackdrop: false
    }
    return this.bottomSheet.open(this.template, config);
  }

  hideBottomSheet() {
    this.bottomSheet.dismiss();
  }
}
