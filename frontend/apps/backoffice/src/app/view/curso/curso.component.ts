import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { uuid } from 'src/app/entity/aluno';
import { Curso } from 'src/app/entity/curso';
import { CursoService } from 'src/app/services/curso.service';
import { CreateCursoModalComponent } from 'src/app/share/modals/curso/create-curso-modal/create-curso-modal.component';

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
    private router : Router,
    private dialog : MatDialog
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

  openModalCurso(){
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

  onChange(event: Event){ 
    const value = (event.target as HTMLInputElement).value;
    document.querySelectorAll('tr.mat-row.cdk-row.ng-star-inserted')
      .forEach(element => {
        if(
          element.innerHTML.toLowerCase().includes(value.toLowerCase())
        ){
          element.classList.remove('none');
        }else{
          element.classList.add('none');
        }
      } )
  }
}
