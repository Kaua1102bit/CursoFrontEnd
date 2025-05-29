import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Curriculo } from '../models/curriculo.interface';

@Injectable({
  providedIn: 'root'
})
export class CurriculosService {
  private apiUrl = "http://localhost:3008/curriculos";

  constructor(private http: HttpClient) {}

  //get - read
  getCurriculos(): Observable<Curriculo[]> {
    return this.http.get<Curriculo[]>(this.apiUrl);
  }

  getCurriculo(cpf: number): Observable<Curriculo> {
    return this.http.get<Curriculo>(`${this.apiUrl}/${cpf}`);
  }

  //post - create
  cadastrarCurriculo(curriculo: Curriculo): Observable<Curriculo> {
    return this.http.post<Curriculo>(this.apiUrl, curriculo);
  }

  //put - update
  atualizarCurriculo(cpf: number, curriculo: Curriculo): Observable<Curriculo> {
    return this.http.put<Curriculo>(`${this.apiUrl}/${cpf}`, curriculo);
  }

  //delete - delete
  removerCurriculo(cpf: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${cpf}`);
  }
}
