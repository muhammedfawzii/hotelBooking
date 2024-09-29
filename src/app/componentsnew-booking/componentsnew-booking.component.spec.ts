import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentsnewBookingComponent } from './componentsnew-booking.component';

describe('ComponentsnewBookingComponent', () => {
  let component: ComponentsnewBookingComponent;
  let fixture: ComponentFixture<ComponentsnewBookingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComponentsnewBookingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ComponentsnewBookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
