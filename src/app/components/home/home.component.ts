import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { LoadingComponent } from "../loading/loading.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule, LoadingComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  newPost: string = '';
  posts: string[] = [];
  comment: string = '';

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

}
