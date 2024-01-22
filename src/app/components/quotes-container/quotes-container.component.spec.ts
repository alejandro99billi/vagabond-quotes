import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuotesContainerComponent } from './quotes-container.component';

describe('QuotesContainerComponent', () => {
  let component: QuotesContainerComponent;
  let fixture: ComponentFixture<QuotesContainerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QuotesContainerComponent]
    });
    fixture = TestBed.createComponent(QuotesContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
