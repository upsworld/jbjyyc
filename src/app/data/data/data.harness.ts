import { ComponentHarness } from '@angular/cdk/testing';
import { DataItemHarness } from '../data-item/data-item.harness';

export class DataHarness extends ComponentHarness {
  static hostSelector = 'slo-data';

  /** Gets all currently shown data items. */
  getDataItems = this.locatorForAll(DataItemHarness);

  getDataItemByLabel(label: string) {
    return this.locatorFactory.locatorForOptional(DataItemHarness.with({ labelText: label }))();
  }
}
