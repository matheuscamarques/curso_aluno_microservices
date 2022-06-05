import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { Aluno, uuid } from 'src/app/entity/aluno';
import { Curso } from 'src/app/entity/curso';
import { AlunoService } from 'src/app/services/aluno.service';
import { CursoAlunoService } from 'src/app/services/curso-aluno.service';
import { CursoService } from 'src/app/services/curso.service';
import { CursoComponent } from '../../curso/curso.component';

@Component({
  selector: 'app-aluno-page',
  templateUrl: './aluno-page.component.html',
  styleUrls: ['./aluno-page.component.scss']
})
export class AlunoPageComponent implements OnInit {
  static path = 'alunos/:id';
  public aluno: Aluno = new Aluno();
  public displayedColumns: string[] = ['codigo', 'descricao', 'options'];
  public dataSource: MatTableDataSource<Curso> = new MatTableDataSource();

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private alunoService: AlunoService,
    private cursoAlunoService: CursoAlunoService,
    private cursoService: CursoService,
  ) { }


  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = params['id'];

      const assignAluno = (aluno: Aluno) => {
        Object.assign(this.aluno, aluno)
      }

      const pushCurso = (curso: Curso) => {
        const cursoInstance = new Curso();
                Object.assign(cursoInstance, curso);
                this.aluno.cursos.push(cursoInstance);
                this.dataSource.data = this.aluno.cursos;
      }

      const appendCursos = (cursos: string[]) => {
        for (const cursoAluno of cursos) {
          this.cursoService.get(cursoAluno)
            .subscribe(pushCurso);
        }
      }

      this.alunoService
      .get(id)
      .subscribe(assignAluno);

      this.cursoAlunoService
        .getByAluno(id)
        .subscribe(appendCursos);


    });

  }

  goToCursoPage(codigo: uuid){
    this.router.navigate([CursoComponent.path, codigo]);
  }

}
