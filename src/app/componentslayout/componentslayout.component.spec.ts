import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentslayoutComponent } from './componentslayout.component';

describe('ComponentslayoutComponent', () => {
  let component: ComponentslayoutComponent;
  let fixture: ComponentFixture<ComponentslayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComponentslayoutComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ComponentslayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
