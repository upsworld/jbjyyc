import { BaseHarnessFilters, ComponentHarness, HarnessPredicate } from '@angular/cdk/testing';

export interface DataItemHarnessFilters extends BaseHarnessFilters {
  labelText?: string | RegExp;
  contentText?: string | RegExp;
}

export class DataItemHarness extends ComponentHarness {
  static hostSelector = 'slo-data-item';

  protected getLabel = this.locatorFor('.label');
  protected getData = this.locatorFor('.content');

  static with(options: DataItemHarnessFilters): HarnessPredicate<DataItemHarness> {
    return new HarnessPredicate(DataItemHarness, options)
      .addOption('labelText', options.labelText, (harness, value) => HarnessPredicate.stringMatches(harness.getLabelText(), value))
      .addOption('contentText', options.contentText, (harness, value) => HarnessPredicate.stringMatches(harness.getDataText(), value));
  }

  async getLabelText() {
    return await this.getLabel().then(
      label => label.text(),
      () => null
    );
  }

  async getDataText() {
    return await this.getData().then(
      data => data.text(),
      () => null
    );
  }
}
