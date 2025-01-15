import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommunityJoinScreenComponent } from '../components/community-join-screen/community-join-screen.component';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-neutrino-artistry',
  standalone: true,
  imports: [],
  templateUrl: './neutrino-artistry.component.html',
  styleUrl: './neutrino-artistry.component.scss',
})
export class NeutrinoArtistryComponent {
  constructor(private router: Router, private dialog: MatDialog) {}

  onClickOfJoinCommunity(): void {
    this.dialog.open(CommunityJoinScreenComponent, {
      width: '400px',
    });
  }
}
