import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { uuid } from '../entity/aluno';
import { AlunoService } from './aluno.service';
import { CursoService } from './curso.service';

@Injectable({
  providedIn: 'root'
})
export class CursoAlunoService {


  constructor(
    private http: HttpClient
  ) { }
  
  getByAluno(codigo: uuid){
       return this.http.get<string[]>(`http://localhost:3001/curso-aluno/list-by-aluno/${codigo}`)
  }

  getByCurso(codigo: uuid) {
    return this.http.get<string[]>(`http://localhost:3001/curso-aluno/list-by-curso/${codigo}`)
  }

  delete(alunoCodigo: uuid, cursoCodigo: uuid) {
    return this.http.delete(`http://localhost:3001/curso-aluno/`,{
      body: {
        codigo_curso: cursoCodigo,
        codigo_aluno: alunoCodigo
      }
    })
  }
}
