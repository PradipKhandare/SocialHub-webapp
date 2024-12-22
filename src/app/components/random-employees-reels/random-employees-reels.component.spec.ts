import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomEmployeesReelsComponent } from './random-employees-reels.component';

describe('RandomEmployeesReelsComponent', () => {
  let component: RandomEmployeesReelsComponent;
  let fixture: ComponentFixture<RandomEmployeesReelsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RandomEmployeesReelsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RandomEmployeesReelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
