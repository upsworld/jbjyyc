import { BaseHarnessFilters, ComponentHarness, HarnessPredicate } from '@angular/cdk/testing';

export interface BenutzerDisplayHarnessFilters extends BaseHarnessFilters {
  abbreviation?: string | RegExp;
}

export class BenutzerDisplayHarness extends ComponentHarness {
  static hostSelector = 'slo-benutzer-display';

  protected getMainDiv = this.locatorFor('div');

  static with(options: BenutzerDisplayHarnessFilters): HarnessPredicate<BenutzerDisplayHarness> {
    return new HarnessPredicate(BenutzerDisplayHarness, options).addOption('abbreviation', options.abbreviation, (harness, value) =>
      HarnessPredicate.stringMatches(harness.getAbbreviation(), value)
    );
  }

  async getAbbreviation(): Promise<string> {
    return await this.getMainDiv().then(
      mainDiv => mainDiv.text(),
      () => null
    );
  }
}
