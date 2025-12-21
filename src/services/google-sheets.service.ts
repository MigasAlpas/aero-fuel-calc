import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';

export interface SheetData {
  range: string;
  values: any[][];
}

@Injectable({
  providedIn: 'root'
})
export class GoogleSheetsService {
  private apiUrl = 'https://sheets.googleapis.com/v4/spreadsheets';
  private apiKey = environment.googleApiKey;
  private spreadsheetId = environment.spreadsheetId;

  constructor(private http: HttpClient) { }

  // Obter dados de uma range específica
  getSheetData(range: string): Observable<any[][]> {
    const url = `${this.apiUrl}/${this.spreadsheetId}/values/${range}?key=${this.apiKey}`;

    return this.http.get<SheetData>(url).pipe(
      map(response => response.values || [])
    );
  }

  // Obter dados com cabeçalhos como objetos
  getSheetDataAsObjects(range: string): Observable<any[]> {
    return this.getSheetData(range).pipe(
      map(values => {
        if (values.length === 0) return [];

        const headers = values[0];
        const rows = values.slice(1);

        return rows.map(row => {
          const obj: any = {};
          headers.forEach((header, index) => {
            obj[header] = row[index] || '';
          });
          return obj;
        });
      })
    );
  }

  // Obter múltiplas ranges
  getMultipleRanges(ranges: string[]): Observable<any> {
    const rangesParam = ranges.join('&ranges=');
    const url = `${this.apiUrl}/${this.spreadsheetId}/values:batchGet?ranges=${rangesParam}&key=${this.apiKey}`;

    return this.http.get(url);
  }
}