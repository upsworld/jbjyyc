import { ChangeDetectionStrategy, Component, HostBinding, Input, OnInit } from '@angular/core';

@Component({
  selector: 'slo-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DataComponent implements OnInit {
  @HostBinding('class.double-column')
  @Input()
  doubleColumn: boolean;

  @HostBinding('class.one-line-details')
  @Input()
  oneLineDetails: boolean;

  @HostBinding('class.first-line-as-header')
  @Input()
  firstLineAsHeader: boolean;

  @HostBinding('class.full-width')
  @Input()
  fullWidth: boolean;

  @Input()
  newStyle: boolean;

  @HostBinding('class.new-style')
  get useNewStyle() {
    return this.newStyle;
  }

  @HostBinding('class.old-style')
  get useOldStyle() {
    return !this.newStyle;
  }

  ngOnInit() {
    if (this.newStyle && (this.doubleColumn || this.oneLineDetails || this.firstLineAsHeader)) {
      console.error('If newStyle is used, the other properties must not be set');
    }
  }
}
