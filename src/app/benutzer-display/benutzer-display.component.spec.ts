import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BenutzerDisplayComponent } from './benutzer-display.component';
import { By } from '@angular/platform-browser';
import { MatLegacyTooltipHarness as MatTooltipHarness } from '@angular/material/legacy-tooltip/testing';
import { HarnessLoader } from '@angular/cdk/testing';
import { TestbedHarnessEnvironment } from '@angular/cdk/testing/testbed';
import { MatTooltipModule } from '@angular/material/tooltip';

describe('BenutzerDisplayComponent', () => {
  let component: BenutzerDisplayComponent;
  let fixture: ComponentFixture<BenutzerDisplayComponent>;
  let loader: HarnessLoader;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BenutzerDisplayComponent, MatTooltipModule],
    }).compileComponents();

    fixture = TestBed.createComponent(BenutzerDisplayComponent);
    loader = TestbedHarnessEnvironment.loader(fixture);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('should show abbreviated user name', () => {
    component.benutzer = { vorname: 'Florian', nachname: 'Haas', benutzerId: 'uuid' };

    fixture.detectChanges();

    expect(fixture.debugElement.query(By.css('div')).nativeElement.textContent.trim()).toEqual('FH');
  });

  it('should show full user name in tooltip', async () => {
    component.benutzer = { vorname: 'Florian', nachname: 'Haas', benutzerId: 'uuid' };

    fixture.detectChanges();

    const tooltipHarness = await loader.getHarness(MatTooltipHarness.with({ selector: 'div' }));
    await tooltipHarness.show();

    expect(await tooltipHarness.getTooltipText()).toEqual('Florian Haas');
  });

  it('should show full user name and group in tooltip', async () => {
    component.benutzer = { vorname: 'Florian', nachname: 'Haas', benutzerId: 'uuid' };
    component.benutzerGruppe = 'AUD';

    fixture.detectChanges();

    const tooltipHarness = await loader.getHarness(MatTooltipHarness.with({ selector: 'div' }));
    await tooltipHarness.show();

    expect(await tooltipHarness.getTooltipText()).toEqual('Außendienst: Florian Haas');
  });
});
