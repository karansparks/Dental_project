import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThankScreenComponent } from './thank-screen.component';

describe('ThankScreenComponent', () => {
  let component: ThankScreenComponent;
  let fixture: ComponentFixture<ThankScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ThankScreenComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThankScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
