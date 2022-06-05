import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AlunoService } from './aluno.service';
import { CursoService } from './curso.service';

@Injectable({
  providedIn: 'root'
})
export class CursoAlunoService {
  constructor(
    private http: HttpClient
  ) { }
  
  getByAluno(codigo: string){
       return this.http.get<string[]>(`http://localhost:3001/curso-aluno/list-by-aluno/${codigo}`)
  }
}
