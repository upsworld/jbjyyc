import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataComponent } from './data.component';

describe('DataComponent', () => {
  let component: DataComponent;
  let fixture: ComponentFixture<DataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DataComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have old style by default', () => {
    expect(fixture.debugElement.classes).toHaveProperty('old-style', true);
    expect(fixture.debugElement.classes).not.toHaveProperty('new-style', true);
  });

  it('should have new style if specified', () => {
    component.newStyle = true;

    fixture.detectChanges();
    expect(fixture.debugElement.classes).toHaveProperty('new-style', true);
    expect(fixture.debugElement.classes).not.toHaveProperty('old-style', true);
  });
});
