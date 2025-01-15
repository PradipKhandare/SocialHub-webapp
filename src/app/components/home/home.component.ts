import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { LoadingComponent } from '../loading/loading.component';
import { CommonModule } from '@angular/common';
import { TopNavbarComponent } from '../../shared/top-navbar/top-navbar.component';
import { ActivatedRoute, Router } from '@angular/router';
import { OtpVerificationService } from '../../services/otp-verification.service';
import { HttpClientModule } from '@angular/common/http';

interface User {
  name: string;
  followers: number;
  profilePic: string;
  isFollowing: boolean;
  designation: string;
  following: number;
  posts: number;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule, CommonModule, HttpClientModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  isSaved: boolean = false;
  showComments = false; // Track whether the comment section is visible
  newComment = ''; // Bind the new comment input field
  comments: string[] = []; // Store comments
  isLiked: boolean = false;
  newPost: string = '';
  posts: string[] = [];
  comment: string = '';
  isFollowing: boolean = false;
  isLoading: boolean = false;

  email: string = '';
  name: string = '';
  gender: string = '';
  department: string = '';
  employeeId: string = '';
  confirmed: boolean = false;

  newItems = [
    {
      image: 'assets/images/item1.jpg',
      title: 'Creative Arts Workshop',
      subtitle: 'Unleashing Creativity',
      detail1: '25 Participants',
      detail2: '4 Hours',
      detail3: 'Location: Studio 5',
    },
  ];

  topUsers: User[] = [
    {
      name: ' Alex Carter',
      followers: 120,
      profilePic: 'assets/images/profileIcon.png',
      isFollowing: false,
      designation: 'Application Development',
      following: 12,
      posts: 10,
    },
  ];

  selectedImage: File | null = null;
  selectedVideo: File | null = null;

  constructor(
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute
  ) {}
  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      this.email = params['email'];
      this.name = params['name'];
      this.gender = params['gender'];
      this.employeeId = params['employeeID'];
    });

    console.log(this.email);
  }

  postSkill(): void {
    if (this.newPost.trim()) {
      this.posts.unshift(this.newPost.trim());
      this.newPost = '';
    }
  }

  likePost(post: string): void {}

  sharePost(post: string): void {
    console.log('Post shared');
  }

  commentOnPost(post: string): void {
    console.log(`Comment on ${post}: ${this.comment}`);
    this.comment = '';
  }
  savePost(): void {
    console.log('Post saved');
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
  onFavouriteClick() {
    this.router.navigate(['/favourite']);
  }
  onLogout() {
    this.router.navigate(['/login']);
  }

  toggleLike() {
    this.isLiked = !this.isLiked;
  }
  // Toggle the visibility of the comment section
  toggleComments() {
    this.showComments = !this.showComments;
  }
  onClickOfNeutrinoArtistry() {
    this.router.navigate(['/artistry']);
  }

  // Add a new comment to the comments array
  addComment() {
    if (this.newComment.trim()) {
      this.comments.push(this.newComment.trim());
      this.newComment = ''; // Reset the comment input field
    }
  }
  toggleSave() {
    this.isSaved = !this.isSaved;
  }

  confirmPresence() {
    this.confirmed = true;
    console.log('Your presence is confirmed!');
  }
  resetConfirmation() {
    this.confirmed = false;
    console.log('Confirmation has been reset.');
  }
  toggleFollow() {
    this.isFollowing = !this.isFollowing;
    this.isLoading = true;

    setTimeout(() => {
      this.isFollowing = !this.isFollowing;
      this.isLoading = false;
    }, 1000);
  }

  videos = [
    {
      title: 'Neutrino October Born Celebration',
      description:
        "Description of the video goes here. It provides a brief overview of the video's content.",
      uploader: ' Alex Carter',
      date: '2024-12-24',
      src: 'assets/shorts/short.mp4',
      isLiked: false,
      showComments: false,
      newComment: '',
      comments: [],
    },
    {
      title: 'Neutrino September Born Celebration',
      description:
        "Description of the video goes here. It provides a brief overview of the video's content.",
      uploader: ' Alex Carter',
      date: '2024-12-24',
      src: 'assets/shorts/short2.mp4',
      isLiked: false,
      showComments: false,
      newComment: '',
      comments: [],
    },
  ];
}
