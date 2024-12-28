import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { LoadingComponent } from "../loading/loading.component";
import { CommonModule } from '@angular/common';
import { TopNavbarComponent } from "../../shared/top-navbar/top-navbar.component";
import { Router } from '@angular/router';

interface User {
  name: string;
  followers: number;
  profilePic: string;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule, CommonModule, TopNavbarComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})


export class HomeComponent {
  newPost: string = '';
  posts: string[] = [];
  comment: string = '';
  topUsers: User[] = [
    {
      name: 'Pradip Khandare',
      followers: 120,
      profilePic: 'assets/images/myPic.jpg'
    },
    {
      name: 'Disha Gujrathi',
      followers: 100,
      profilePic: 'assets/images/myPic.jpg'
    },
    {
      name: 'Shreyash Jadhav',
      followers: 95,
      profilePic: 'assets/images/myPic.jpg'
    },
    {
      name: 'Sulakshana Pawar',
      followers: 97,
      profilePic: 'assets/images/myPic.jpg'
    },
    {
      name: 'Rutuja Tathe',
      followers: 89,
      profilePic: 'assets/images/myPic.jpg'
    }

  ];

  selectedImage: File | null = null;
  selectedVideo: File | null = null;

  constructor(private authService: AuthService, private router: Router) { }
  ngOnInit() { }

  postSkill(): void {
    if (this.newPost.trim()) {
      this.posts.unshift(this.newPost.trim());
      this.newPost = '';
    }
  }

  likePost(post: string): void { }

  sharePost(post: string): void { }

  commentOnPost(post: string): void {
    console.log(`Comment on ${post}: ${this.comment}`);
    this.comment = '';
  }

  onFileSelected(event: Event, fileType: string): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      const file = input.files[0];
      if (fileType === 'image') {
        this.selectedImage = file;
      } else if (fileType === 'video') {
        this.selectedVideo = file;
      }
    }
  }

  onProfileClick() {
    this.router.navigate(['/profile']);
  }

  onClickOfName() {
    this.router.navigate(['/profile']);
  }

  onClickOfProfilePicture() {
    this.router.navigate(['/profile']);
  }

  onClickOfNeutranceCommunity() {
    this.router.navigate(['/neutrance']);
  }
}
