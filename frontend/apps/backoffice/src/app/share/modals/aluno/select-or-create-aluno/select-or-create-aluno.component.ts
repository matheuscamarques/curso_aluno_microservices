import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AlunoCreate } from 'src/app/dtos/aluno/aluno-create';
import { AlunoUpdate } from 'src/app/dtos/aluno/aluno-update';
import { Aluno, uuid } from 'src/app/entity/aluno';
import { AlunoService } from 'src/app/services/aluno.service';
import { AlunoComponent } from 'src/app/view/aluno/aluno.component';

export interface IDictionary<T> {
  [key: string]: T;
}


@Component({
  selector: 'app-select-or-create-aluno',
  templateUrl: './select-or-create-aluno.component.html',
  styleUrls: ['./select-or-create-aluno.component.scss']
})
export class SelectOrCreateAlunoComponent implements OnInit {

  public static path = 'alunos';
  public displayedColumns: string[] = ['codigo', 'nome', 'options'];

  public aluno: AlunoCreate | AlunoUpdate = { nome: '' };
  public alunos: Aluno[] = []
  public selectedAlunos : IDictionary<string> = {};
  constructor(
    private service: AlunoService,
    private router: Router,
    private _snackBar: MatSnackBar,
  ) { }

  ngOnInit(): void {
    this.reload();
  }

  onChange(event: AlunoCreate | AlunoUpdate){ 
    this.aluno = event;
    document.querySelectorAll('tr.mat-row.cdk-row.ng-star-inserted')
      .forEach(element => {
        if(
          element.innerHTML.toLowerCase().includes(this.aluno.nome.toLowerCase())
        ){
          element.classList.remove('none');
        }else{
          element.classList.add('none');
        }
      } )
  }

  onSubmit() {
    if(this.aluno.nome.length < 3){
      alert('Nome deve ter no mínimo 3 caracteres');
      return;
    }

    this.service
      .create(this.aluno)
      .subscribe( _ => {
        this._snackBar.open('Aluno criado com sucesso!', 'Ok', {
          duration: 3000,
        });
        this.reload();
      })
  }

  reload() {
    this.service
      .getAll()
      .subscribe(response => {
        this.alunos = response;
        console.log(this.alunos);
      })
  }

  goToAlunoPage(codigo : uuid){
    this.router.navigate([AlunoComponent.path, codigo]);
  }

  onCheck(codigo: uuid){
    if(this.selectedAlunos[codigo]){
      delete this.selectedAlunos[codigo];
    }else{
      this.selectedAlunos[codigo] = codigo;
    }

    console.log(this.selectedAlunos);
  }

}
