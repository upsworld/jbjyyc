import { ChangeDetectionStrategy, Component, HostBinding, Input } from '@angular/core';

export type ContentStyle = 'NORMAL' | 'BOLD' | 'LABEL';

@Component({
  selector: 'slo-data-item',
  templateUrl: './data-item.component.html',
  styleUrls: ['./data-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DataItemComponent {
  @Input() label: string;

  // Only there for compatibility reasons, remove when the new design is used everywhere
  @Input() emphasize = false;

  @Input() collapseEmptyLabel = true;

  @Input() contentStyle: ContentStyle;

  @Input()
  @HostBinding('class.column-break-after')
  columnBreakAfter = false;

  @Input()
  @HostBinding('class.less-vertical-margin')
  lessVerticalMargin = false;

  get displayLabel() {
    return this.label !== undefined || !this.collapseEmptyLabel;
  }

  @HostBinding('class.normal-content')
  get normalStyle() {
    return this.contentStyle === 'NORMAL';
  }

  @HostBinding('class.bold-content')
  get boldStyle() {
    return this.contentStyle === 'BOLD' || this.contentStyle === undefined;
  }

  @HostBinding('class.label-content')
  get labelStyle() {
    return this.contentStyle === 'LABEL';
  }
}
