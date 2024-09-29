import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentsusersComponent } from './componentsusers.component';

describe('ComponentsusersComponent', () => {
  let component: ComponentsusersComponent;
  let fixture: ComponentFixture<ComponentsusersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComponentsusersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ComponentsusersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
