import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataItemComponent } from './data-item.component';
import { By } from '@angular/platform-browser';

describe('DataItemComponent', () => {
  let component: DataItemComponent;
  let fixture: ComponentFixture<DataItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DataItemComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DataItemComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('should display label', () => {
    component.label = 'Label #1';
    fixture.detectChanges();
    expect(fixture.debugElement.nativeElement.textContent).toContain('Label #1');
  });

  it('should highlight label if requested', () => {
    component.label = 'Label #1';
    component.emphasize = true;
    fixture.detectChanges();
    expect(fixture.debugElement.query(By.css('.highlight'))).not.toBeNull();
  });

  it('should not highlight label by default', () => {
    component.label = 'Label #1';
    fixture.detectChanges();
    expect(fixture.debugElement.query(By.css('.highlight'))).toBeNull();
  });

  it('should remove empty label by default', () => {
    fixture.detectChanges();
    expect(fixture.debugElement.query(By.css('.label'))).toBeNull();
  });

  it('should not remove non-empty label by default', () => {
    component.label = 'Label #1';
    fixture.detectChanges();
    expect(fixture.debugElement.query(By.css('.label'))).not.toBeNull();
  });

  it('should not remove empty label if collapsing disabled', () => {
    component.collapseEmptyLabel = false;
    fixture.detectChanges();
    expect(fixture.debugElement.query(By.css('.label'))).not.toBeNull();
  });

  it('should have bold styling by default', () => {
    expectStylingClasses(true, false, false);
  });

  it('should have normal styling if specified', () => {
    component.contentStyle = 'NORMAL';
    expectStylingClasses(false, false, true);
  });

  it('should have label styling if specified', () => {
    component.contentStyle = 'LABEL';
    expectStylingClasses(false, true, false);
  });

  function expectStylingClasses(bold: boolean, label: boolean, normal: boolean) {
    fixture.detectChanges();

    const expectObj = expect(fixture.debugElement.classes);

    (label ? expectObj : expectObj.not).toHaveProperty('label-content', true);
    (normal ? expectObj : expectObj.not).toHaveProperty('normal-content', true);
    (bold ? expectObj : expectObj.not).toHaveProperty('bold-content', true);
  }

  it('should not break columns after item by default', () => {
    fixture.detectChanges();
    expect(fixture.debugElement.classes).not.toHaveProperty('column-break-after', true);
  });

  it('should break columns after item if specified so', () => {
    component.columnBreakAfter = true;
    fixture.detectChanges();
    expect(fixture.debugElement.classes).toHaveProperty('column-break-after', true);
  });

  it('should not have less vertical margin by default', () => {
    fixture.detectChanges();
    expect(fixture.debugElement.classes).not.toHaveProperty('less-vertical-margin', true);
  });

  it('should have less vertical margin if specified so', () => {
    component.lessVerticalMargin = true;
    fixture.detectChanges();
    expect(fixture.debugElement.classes).toHaveProperty('less-vertical-margin', true);
  });
});
