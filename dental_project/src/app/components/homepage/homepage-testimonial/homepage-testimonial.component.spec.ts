import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomepageTestimonialComponent } from './homepage-testimonial.component';

describe('HomepageTestimonialComponent', () => {
  let component: HomepageTestimonialComponent;
  let fixture: ComponentFixture<HomepageTestimonialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomepageTestimonialComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomepageTestimonialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
