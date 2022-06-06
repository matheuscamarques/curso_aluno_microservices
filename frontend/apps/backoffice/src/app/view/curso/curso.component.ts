import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { uuid } from 'src/app/entity/aluno';
import { Curso } from 'src/app/entity/curso';
import { CursoService } from 'src/app/services/curso.service';

@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.scss']
})
export class CursoComponent implements OnInit {
  static path = 'cursos';
  public cursos : Curso[] = [];
  public displayedColumns : string[] = ['codigo', 'descricao', 'options'];
  constructor(
    private service : CursoService,
    private router : Router
  ) { }

  ngOnInit(): void {
    this.service.getAll().subscribe(cursos => {
      this.cursos = cursos;
    });
  }


  onSubmit() : void {

  }

  goToCursoPage(codigo: uuid) {
    this.router.navigate([CursoComponent.path, codigo]);
  }
}
