import { DataSource } from '@angular/cdk/collections';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { Aluno, uuid } from 'src/app/entity/aluno';
import { Curso } from 'src/app/entity/curso';
import { AlunoService } from 'src/app/services/aluno.service';
import { CursoAlunoService } from 'src/app/services/curso-aluno.service';
import { CursoService } from 'src/app/services/curso.service';
import { IDictionary, SelectOrCreateAlunoComponent } from 'src/app/share/modals/aluno/select-or-create-aluno/select-or-create-aluno.component';
import { AlunoComponent } from '../../aluno/aluno.component';
import { CursoComponent } from '../../curso/curso.component';

@Component({
  selector: 'app-curso-page',
  templateUrl: './curso-page.component.html',
  styleUrls: ['./curso-page.component.scss']
})
export class CursoPageComponent implements OnInit {
  static path = 'cursos/:id';
  public curso: Curso = new Curso()
  public alunos: MatTableDataSource<Aluno> = new MatTableDataSource();
  public displayedColumns: string[] = ['codigo', 'nome', 'options'];

  constructor(
    private cursoService: CursoService,
    private alunoService: AlunoService,
    private cursoAlunoService: CursoAlunoService,
    private dialog: MatDialog,
    private activeRoute: ActivatedRoute,
    private router: Router
  ) { }


  ngOnInit(): void {
    this.activeRoute.params.subscribe(params => {
      const codigo = params['id'];
      this.curso = new Curso();
      this.cursoService.get(codigo).subscribe(curso => {
        Object.assign(this.curso, curso);
      });

      this.alunos = new MatTableDataSource();

      this.cursoAlunoService.getByCurso(codigo).subscribe(alunos => {
        for (const aluno of alunos) {
          this.alunoService.get(aluno).subscribe(aluno => {
            const alunoInstance = new Aluno();
            Object.assign(alunoInstance, aluno);
            this.curso.alunos.push(alunoInstance);
            this.alunos.data = this.curso.alunos;
          });
        }
      })
    });
  }


  openAlunoModal() {
    const dialogRef = this.dialog.open(SelectOrCreateAlunoComponent, {
      width: '90%'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        const alunos = Object.values(result as IDictionary<string>);
        for (const codigo of alunos) {
          this.cursoAlunoService.create({
            codigo_aluno: codigo,
            codigo_curso: this.curso.codigo
          }).subscribe(() => {
            console.log('Aluno adicionado ao curso');
          });
        } 
        setTimeout(() => {
          this.ngOnInit();
        }, alunos.length * 500);   
      }
    });
  }


  removeAluno(codigo : uuid){
    this.cursoAlunoService.delete(codigo,this.curso.codigo).subscribe(() => {
      console.log('Aluno removido do curso');
      this.ngOnInit();
    });
  }

  goToAlunoPage(codigo : uuid){
    this.router.navigate([AlunoComponent.path, codigo]);
  }


  deleteCurso(codigo : uuid) {
    this.cursoService.delete(codigo).subscribe(() => {
      console.log('Curso removido');
      this.router.navigate([CursoComponent.path]);
    })
  }
}
