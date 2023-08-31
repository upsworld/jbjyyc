import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DataItemComponent } from './data-item/data-item.component';
import { DataComponent } from './data/data.component';

@NgModule({
  declarations: [DataComponent, DataItemComponent],
  exports: [DataComponent, DataItemComponent],
  imports: [CommonModule],
})
export class SloDataModule {}
