import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentsloginComponent } from './componentslogin.component';

describe('ComponentsloginComponent', () => {
  let component: ComponentsloginComponent;
  let fixture: ComponentFixture<ComponentsloginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComponentsloginComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ComponentsloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
