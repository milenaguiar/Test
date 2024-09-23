import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ConsultaExtrato } from '../models/consultaExtrato.interface';

@Injectable({
  providedIn: 'root'
})
export class ConsultaExtratoService {
  private apiUrl = 'http://localhost:3000/extratos'
  constructor(private http: HttpClient) { }
  pegaExtratoNumeroConta(numeroConta: string): Observable<ConsultaExtrato[]> {
    return this.http.get<ConsultaExtrato[]>(`${this.apiUrl}?numeroConta=${numeroConta}`)
  }
}
