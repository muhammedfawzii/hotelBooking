import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentsdashboardComponent } from './componentsdashboard.component';

describe('ComponentsdashboardComponent', () => {
  let component: ComponentsdashboardComponent;
  let fixture: ComponentFixture<ComponentsdashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComponentsdashboardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ComponentsdashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
