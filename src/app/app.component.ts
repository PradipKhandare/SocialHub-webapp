import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppRoutingRoutingModule } from './modules/app-routing/app-routing-routing.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AppRoutingRoutingModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Neutrino-TalentBox';
}
