import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServCesComponent } from './serv-ces.component';

describe('ServCesComponent', () => {
  let component: ServCesComponent;
  let fixture: ComponentFixture<ServCesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServCesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServCesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
