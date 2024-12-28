import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NeutranceCommunityComponent } from './neutrance-community.component';

describe('NeutranceCommunityComponent', () => {
  let component: NeutranceCommunityComponent;
  let fixture: ComponentFixture<NeutranceCommunityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NeutranceCommunityComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NeutranceCommunityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
