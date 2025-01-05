// table.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Table {
  number: number;
  capacity: number;
  customers: number;
  tablevalue: number;
  status: string;
}

@Injectable({
  providedIn: 'root'
})
export class TableService {
  private apiUrl = 'http://localhost:8080/api/tables';

  constructor(private http: HttpClient) { }

  getTables(): Observable<Table[]> {
    return this.http.get<Table[]>(this.apiUrl);
  }
}
