import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { LoadingComponent } from "../loading/loading.component";
import { CommonModule } from '@angular/common';
import { TopNavbarComponent } from "../../shared/top-navbar/top-navbar.component";
import { Router } from '@angular/router';
import { OtpVerificationService } from '../../services/otp-verification.service';
import { HttpClientModule } from '@angular/common/http';

interface User {
  name: string;
  followers: number;
  profilePic: string;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule, CommonModule, HttpClientModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
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

  username: string | null = '';
  errorMessage: string = '';

  constructor(private authService: AuthService, private router: Router, private otpService: OtpVerificationService) { }

  ngOnInit() {
    this.username = localStorage.getItem('username');
  }

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

  onLogout(): void {
    if (this.username) {
      this.otpService.logout(this.username).subscribe(
        (response: string) => {
          console.log('Logout response:', response);
          localStorage.removeItem('username');
          this.router.navigate(['/login']);
        },
        (error: any) => {
          console.error('Logout failed:', error);
          this.errorMessage = 'Failed to log out. Please try again.';
        }
      );
    } else {
      this.errorMessage = 'No active session found.';
    }
  }
}
