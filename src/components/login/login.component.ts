import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  password: string = '';
  errorMessage: string = '';

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  onSubmit(): void {
    if (this.authService.login(this.password)) {
      this.router.navigate(['/sheet-selector']);
    } else {
      this.errorMessage = 'Password incorreta. Tente novamente.';
      this.password = '';
    }
  }
}