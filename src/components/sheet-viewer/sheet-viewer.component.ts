import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { AuthService } from 'src/services/auth.service';
import { GoogleSheetsService } from '../../services/google-sheets.service';

@Component({
  selector: 'app-sheet-viewer',
  templateUrl: './sheet-viewer.component.html',
  styleUrls: ['./sheet-viewer.component.css']
})
export class SheetViewerComponent implements OnInit {
  sheetUrl: SafeResourceUrl = '';
  sheetId: string = '';
  firstSheetUrl: string = 'https://docs.google.com/spreadsheets/d/';
  finalSheetUrl: string = '/edit?rm=embedded&header=false';
  // sheetUrl = '1ED2l02pgTubp1PX9eK6rkDHTG98lm0ST';

  constructor(
    private authService: AuthService,
    private sanitizer: DomSanitizer
  ) { }

  ngOnInit(): void {
    this.sheetId = this.authService.getSheetId();

    const url = `${this.firstSheetUrl}${this.sheetId}${this.finalSheetUrl}`;
    this.sheetUrl = this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  goBack(): void {
    this.authService.setSheetId('');
    window.history.back();
  }

  logout(): void {
    this.authService.logout();
  }
}