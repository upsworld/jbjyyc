import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentMetaComponent } from './document-meta.component';

describe('DocumentMetaComponent', () => {
  let component: DocumentMetaComponent;
  let fixture: ComponentFixture<DocumentMetaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DocumentMetaComponent]
    });
    fixture = TestBed.createComponent(DocumentMetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
