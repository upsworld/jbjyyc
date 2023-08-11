import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AblageComponentComponent } from './ablage-component.component';

describe('AblageComponentComponent', () => {
  let component: AblageComponentComponent;
  let fixture: ComponentFixture<AblageComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AblageComponentComponent]
    });
    fixture = TestBed.createComponent(AblageComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
