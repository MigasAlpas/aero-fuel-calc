import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticated = false;
  private currentSheetId: string = '';

  constructor(private router: Router) {
    // Verificar se já está autenticado (sessionStorage)
    this.isAuthenticated = sessionStorage.getItem('isAuthenticated') === 'true';
    this.currentSheetId = sessionStorage.getItem('sheetId') || '';
  }

  login(password: string): boolean {
    if (password === environment.pw) {
      this.isAuthenticated = true;
      sessionStorage.setItem('isAuthenticated', 'true');
      return true;
    }
    return false;
  }

  logout(): void {
    this.isAuthenticated = false;
    this.currentSheetId = '';
    sessionStorage.removeItem('isAuthenticated');
    sessionStorage.removeItem('sheetId');
    this.router.navigate(['/login']);
  }

  setSheetId(sheetId: string): void {
    this.currentSheetId = sheetId;
    sessionStorage.setItem('sheetId', sheetId);
  }

  getSheetId(): string {
    return this.currentSheetId;
  }

  isLoggedIn(): boolean {
    return this.isAuthenticated;
  }
}