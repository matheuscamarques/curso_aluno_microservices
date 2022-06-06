import { DataSource } from '@angular/cdk/collections';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { Aluno } from 'src/app/entity/aluno';
import { Curso } from 'src/app/entity/curso';
import { AlunoService } from 'src/app/services/aluno.service';
import { CursoAlunoService } from 'src/app/services/curso-aluno.service';
import { CursoService } from 'src/app/services/curso.service';
import { SelectOrCreateAlunoComponent } from 'src/app/share/modals/aluno/select-or-create-aluno/select-or-create-aluno.component';

@Component({
  selector: 'app-curso-page',
  templateUrl: './curso-page.component.html',
  styleUrls: ['./curso-page.component.scss']
})
export class CursoPageComponent implements OnInit {
  static path = 'cursos/:id';
  public curso : Curso = new Curso()
  public alunos : MatTableDataSource<Aluno> = new MatTableDataSource();
  public displayedColumns: string[] = ['codigo', 'nome', 'options'];

  constructor(
    private cursoService: CursoService,
    private alunoService: AlunoService,
    private cursoAlunoService : CursoAlunoService,
    private dialog: MatDialog,
    private activeRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.activeRoute.params.subscribe(params => {
      const codigo = params['id'];
      this.cursoService.get(codigo).subscribe(curso => {
        Object.assign(this.curso, curso);
      });

      this.cursoAlunoService.getByCurso(codigo).subscribe(alunos => {
        for (const aluno of alunos) {
          this.alunoService.get(aluno).subscribe(aluno => {
            const alunoInstance = new Aluno();
            Object.assign(alunoInstance, aluno);
            this.curso.alunos.push(alunoInstance);
            this.alunos.data =  this.curso.alunos;
          });
        }
      })
    });
  }


  openAlunoModal(){
    const dialogRef = this.dialog.open(SelectOrCreateAlunoComponent, {
      width: '90%'
    });
  }
}
