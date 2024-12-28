import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { CommunityJoinScreenComponent } from '../community-join-screen/community-join-screen.component';

@Component({
  selector: 'app-neutrance-community',
  standalone: true,
  imports: [],
  templateUrl: './neutrance-community.component.html',
  styleUrl: './neutrance-community.component.scss'
})
export class NeutranceCommunityComponent {



  constructor(private router: Router, private dialog: MatDialog) { }

  onClickOfJoinCommunity(): void {
    this.dialog.open(CommunityJoinScreenComponent, {
      width: '400px',
    });
  }
}
