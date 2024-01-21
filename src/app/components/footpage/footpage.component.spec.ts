import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FootpageComponent } from './footpage.component';

describe('FootpageComponent', () => {
  let component: FootpageComponent;
  let fixture: ComponentFixture<FootpageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FootpageComponent]
    });
    fixture = TestBed.createComponent(FootpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
