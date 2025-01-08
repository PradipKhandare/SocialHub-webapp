import { Router } from '@angular/router';
import { Component, ViewChild, ElementRef } from '@angular/core';


@Component({
  selector: 'app-top-navbar',
  standalone: true,
  imports: [],
  templateUrl: './top-navbar.component.html',
  styleUrl: './top-navbar.component.scss',
})
export class TopNavbarComponent {
  @ViewChild('fileInput') fileInput!: ElementRef<HTMLInputElement>;

  constructor(private router: Router) {}

  onHomeIconClick() {
    this.router.navigate(['/home']);
  }

  // Trigger the file input programmatically
  triggerFileInput(): void {
    if (this.fileInput) {
      this.fileInput.nativeElement.click();
    }
  }

  // Handle the file selection
  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input?.files?.length) {
      const selectedFile = input.files[0];
      console.log('Selected File:', selectedFile);

      // Add logic to upload the file or preview it
      this.uploadFile(selectedFile);
    }
  }

  // Upload the file (placeholder logic)
  uploadFile(file: File): void {
    console.log('Uploading file:', file.name);
    // Implement the actual upload logic here, e.g., using HttpClient
  }
}
