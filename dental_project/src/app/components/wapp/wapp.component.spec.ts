import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WappComponent } from './wapp.component';

describe('WappComponent', () => {
  let component: WappComponent;
  let fixture: ComponentFixture<WappComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WappComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WappComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
