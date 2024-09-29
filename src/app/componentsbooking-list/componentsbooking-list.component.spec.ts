import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentsbookingListComponent } from './componentsbooking-list.component';

describe('ComponentsbookingListComponent', () => {
  let component: ComponentsbookingListComponent;
  let fixture: ComponentFixture<ComponentsbookingListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComponentsbookingListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ComponentsbookingListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
