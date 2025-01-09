import { Router } from '@angular/router';
import { Component, ViewChild, ElementRef } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-top-navbar',
  standalone: true,
  imports: [],
  templateUrl: './top-navbar.component.html',
  styleUrl: './top-navbar.component.scss',
})
export class TopNavbarComponent {

  selectedFile: File | null = null; // To store the selected file
  caption: string = '';
  @ViewChild('fileInput') fileInput!: ElementRef<HTMLInputElement>;

  constructor(private router: Router) {}

  onHomeIconClick() {
    this.router.navigate(['/home']);
  }

  triggerFileInput(): void {
    if (this.fileInput) {
      this.fileInput.nativeElement.click();
    }
  }

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input?.files?.length) {
      this.selectedFile = input.files[0];
      console.log('Selected File:', this.selectedFile.name);
    }
  }
  submitUpload(): void {
    if (this.selectedFile && this.caption.trim()) {
      console.log('Uploading file:', this.selectedFile.name);
      console.log('Caption:', this.caption);

      // Call the upload logic or service
      this.uploadFile(this.selectedFile, this.caption);

      // Clear the fields after uploading
      this.selectedFile = null;
      this.caption = '';
    } else {
      alert('Please select a file and enter a caption.');
    }
  }

  uploadFile(file: File, caption: string): void {
    // Implement your upload logic here
    // You can use an HTTP request to upload the file and caption to the server
    console.log('File:', file.name, 'Caption:', caption);
  }

}
