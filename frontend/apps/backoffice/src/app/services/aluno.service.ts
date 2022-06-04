import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AlunoCreate } from '../dtos/aluno/aluno-create';
import { AlunoUpdate } from '../dtos/aluno/aluno-update';
import { Aluno } from '../entity/aluno';

@Injectable({
  providedIn: 'root'
})
export class AlunoService {

  constructor(
    private http: HttpClient
  ) { }


  create(aluno: AlunoCreate | AlunoUpdate) {
   return this.http.post<Aluno>('http://localhost:3001/aluno', aluno)
  }

  get(codigo: string) {
    return this.http.get<Aluno>(`http://localhost:3001/aluno/${codigo}`)
  }

  getAll() {
    return this.http.get<Aluno[]>('http://localhost:3001/aluno/')
  }

}
