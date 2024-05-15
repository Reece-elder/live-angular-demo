import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmallChildCompComponent } from './small-child-comp.component';

describe('SmallChildCompComponent', () => {
  let component: SmallChildCompComponent;
  let fixture: ComponentFixture<SmallChildCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SmallChildCompComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SmallChildCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
