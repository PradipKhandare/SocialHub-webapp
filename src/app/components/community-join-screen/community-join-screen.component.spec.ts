import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommunityJoinScreenComponent } from './community-join-screen.component';

describe('CommunityJoinScreenComponent', () => {
  let component: CommunityJoinScreenComponent;
  let fixture: ComponentFixture<CommunityJoinScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommunityJoinScreenComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CommunityJoinScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
