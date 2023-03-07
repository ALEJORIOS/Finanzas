import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';
import { GoogleAuthService } from './services/google-auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'finanzas';

  constructor(private readonly authService: GoogleAuthService) {}
}
