import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-sheet-selector',
  templateUrl: './sheet-selector.component.html',
  styleUrls: ['./sheet-selector.component.css']
})
export class SheetSelectorComponent {
  sheetId: string = '';
  errorMessage: string = '';

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  onSubmit(): void {
    // Validação básica do ID
    if (!this.sheetId.trim()) {
      this.errorMessage = 'Por favor, insira um ID válido.';
      return;
    }

    // Validação do formato do ID (alfanumérico, hífens e underscores)
    const idPattern = /^[a-zA-Z0-9_-]+$/;
    if (!idPattern.test(this.sheetId)) {
      this.errorMessage = 'ID inválido. Use apenas letras, números, hífens e underscores.';
      return;
    }

    this.authService.setSheetId(this.sheetId);
    this.router.navigate(['/sheet-viewer']);
  }

  logout(): void {
    this.authService.logout();
  }
}