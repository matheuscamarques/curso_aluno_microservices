import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { uuid } from 'src/app/entity/aluno';
import { Curso } from 'src/app/entity/curso';
import { CursoService } from 'src/app/services/curso.service';
import { CursoComponent } from 'src/app/view/curso/curso.component';
import { IDictionary } from '../../aluno/select-or-create-aluno/select-or-create-aluno.component';
import { CreateCursoModalComponent } from '../create-curso-modal/create-curso-modal.component';

@Component({
  selector: 'app-select-or-create-curso-modal',
  templateUrl: './select-or-create-curso-modal.component.html',
  styleUrls: ['./select-or-create-curso-modal.component.scss']
})
export class SelectOrCreateCursoModalComponent implements OnInit {

  public cursos: Curso[] = [];
  public displayedColumns: string[] = ['codigo', 'descricao', 'options'];
  public selectedCursos: IDictionary<string> = {};

  constructor(
    private service: CursoService,
    private router: Router,
    private dialog: MatDialog
  ) { }


  ngOnInit(): void {
    this.service.getAll().subscribe(cursos => {
      this.cursos = cursos;
    });
  }


  onSubmit(): void {

  }

  goToCursoPage(codigo: uuid) {
    this.router.navigate([CursoComponent.path, codigo]);
  }

  openModalCurso() {
    const dialogRef = this.dialog.open(CreateCursoModalComponent, {
      width: '90%'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      this.service.create({
        descricao: result.descricao,
        emenda: result.emenda
      }).subscribe(_ => {
        this.ngOnInit();
      });
    });
  }

  onChange(event: Event) {
    const value = (event.target as HTMLInputElement).value;
    document.querySelectorAll('tr.mat-row.cdk-row.ng-star-inserted')
      .forEach(element => {
        if (
          element.innerHTML.toLowerCase().includes(value.toLowerCase())
        ) {
          element.classList.remove('none');
        } else {
          element.classList.add('none');
        }
      })
  }


  onCheck(codigo: uuid){
    if(this.selectedCursos[codigo]){
      delete this.selectedCursos[codigo];
    }else{
      this.selectedCursos[codigo] = codigo;
    }

    console.log(this.selectedCursos);
  }

}
