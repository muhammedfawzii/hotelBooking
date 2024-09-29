import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentsbookingCalendarComponent } from './componentsbooking-calendar.component';

describe('ComponentsbookingCalendarComponent', () => {
  let component: ComponentsbookingCalendarComponent;
  let fixture: ComponentFixture<ComponentsbookingCalendarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComponentsbookingCalendarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ComponentsbookingCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
