import { ChangeDetectionStrategy, Component, HostBinding, Input } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'slo-expansion-panel-list',
  standalone: true,
  templateUrl: './expansion-panel-list.component.html',
  imports: [MatExpansionModule, CommonModule],
  styleUrls: ['./expansion-panel-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExpansionPanelListComponent {
  @Input()
  itemAmount: number;

  @Input()
  inlineSingleItem: boolean;

  @Input()
  titleLabel: string;

  @Input()
  expanded = false;

  @HostBinding('class.inline-content')
  get inlineContent() {
    return this.itemAmount === 1 && this.inlineSingleItem;
  }
}
