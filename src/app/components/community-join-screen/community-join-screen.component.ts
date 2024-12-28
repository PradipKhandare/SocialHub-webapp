import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatCommonModule } from '@angular/material/core';
import { MatDialogContent, MatDialogModule } from '@angular/material/dialog';
import { RouterModule } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-community-join-screen',
  standalone: true,
  imports: [MatDialogModule, MatDialogContent, CommonModule,
    RouterModule,
    MatFormFieldModule,
  ],
  templateUrl: './community-join-screen.component.html',
  styleUrl: './community-join-screen.component.scss'
})
export class CommunityJoinScreenComponent {
onClickOfCancelButton() {
throw new Error('Method not implemented.');
}
onClickOfJoinButton() {
throw new Error('Method not implemented.');
}



}
