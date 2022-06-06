import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { uuid } from '../entity/aluno';
import { Curso } from '../entity/curso';

@Injectable({
  providedIn: 'root'
})
export class CursoService {
  constructor(
    private http: HttpClient
  ) { }

  get(codigo: uuid) {
    return this.http.get<Curso>(`http://localhost:3001/curso/${codigo}`)
  }

  getAll() {
    return this.http.get<Curso[]>('http://localhost:3001/curso/')
  }


}
