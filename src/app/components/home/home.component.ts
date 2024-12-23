import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { LoadingComponent } from "../loading/loading.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  newPost: string = '';
  posts: string[] = [];
  comment: string = '';

  selectedImage: File | null = null;
  selectedVideo: File | null = null;

  constructor(private authService: AuthService) { }

  postSkill(): void {
    if (
      this.newPost.trim()) {
      this.posts.unshift(this.newPost.trim()
      ); this.newPost = '';
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



}
