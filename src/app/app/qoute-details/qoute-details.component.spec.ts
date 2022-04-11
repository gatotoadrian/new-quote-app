import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuoteDetailComponent } from '././qoute-details.component';

describe('QuoteDetailComponent', () => {
  let component: QuoteDetailComponent;
  let fixture: ComponentFixture<QuoteDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuoteDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuoteDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
