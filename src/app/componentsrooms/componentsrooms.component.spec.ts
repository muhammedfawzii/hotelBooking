import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentsroomsComponent } from './componentsrooms.component';

describe('ComponentsroomsComponent', () => {
  let component: ComponentsroomsComponent;
  let fixture: ComponentFixture<ComponentsroomsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComponentsroomsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ComponentsroomsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
