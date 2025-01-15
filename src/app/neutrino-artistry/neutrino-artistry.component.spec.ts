import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NeutrinoArtistryComponent } from './neutrino-artistry.component';

describe('NeutrinoArtistryComponent', () => {
  let component: NeutrinoArtistryComponent;
  let fixture: ComponentFixture<NeutrinoArtistryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NeutrinoArtistryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NeutrinoArtistryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
