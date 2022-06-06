import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { Aluno, uuid } from 'src/app/entity/aluno';
import { Curso } from 'src/app/entity/curso';
import { AlunoService } from 'src/app/services/aluno.service';
import { CursoAlunoService } from 'src/app/services/curso-aluno.service';
import { CursoService } from 'src/app/services/curso.service';
import { IDictionary } from 'src/app/share/modals/aluno/select-or-create-aluno/select-or-create-aluno.component';
import { SelectOrCreateCursoModalComponent } from 'src/app/share/modals/curso/select-or-create-curso-modal/select-or-create-curso-modal.component';
import { AlunoComponent } from '../../aluno/aluno.component';
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
  public cursos: MatTableDataSource<Curso> = new MatTableDataSource();

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private alunoService: AlunoService,
    private cursoAlunoService: CursoAlunoService,
    private cursoService: CursoService,
    private dialogRef: MatDialog
  ) { }


  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = params['id'];
      this.aluno = new Aluno();
      this.cursos = new MatTableDataSource();

      const assignAluno = (aluno: Aluno) => {
        Object.assign(this.aluno, aluno)
      }

      const pushCurso = (curso: Curso) => {
        const cursoInstance = new Curso();
        Object.assign(cursoInstance, curso);
        this.aluno.cursos.push(cursoInstance);
        this.cursos.data = this.aluno.cursos;
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

  deleteAluno(codigo: uuid) {
    this.alunoService.delete(codigo).subscribe(() => {
      this.router.navigate([AlunoComponent.path]);
    })
  }

  deleteCurso(codigo: uuid) {
    this.cursoAlunoService.delete(this.aluno.codigo, codigo).subscribe(() => {
      this.ngOnInit();
    });
  }

  goToCursoPage(codigo: uuid) {
    this.router.navigate([CursoComponent.path, codigo]);
  }

  openCursoModal() {
    const dialogRef = this.dialogRef.open(SelectOrCreateCursoModalComponent, {
      width: '90%',
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        const cursos = Object.values(result as IDictionary<string>);
        for (const codigo of cursos) {
          this.cursoAlunoService.create({
            codigo_aluno: this.aluno.codigo,
            codigo_curso: codigo
          }).subscribe(() => {
            console.log('Aluno adicionado ao curso');
          });
        }
        setTimeout(() => {
          this.ngOnInit();
        }, cursos.length * 500);
      }

    });
  }
}
