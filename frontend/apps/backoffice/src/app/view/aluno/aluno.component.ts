import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AlunoCreate } from 'src/app/dtos/aluno/aluno-create';
import { AlunoUpdate } from 'src/app/dtos/aluno/aluno-update';
import { Aluno } from 'src/app/entity/aluno';
import { AlunoService } from 'src/app/services/aluno.service';

@Component({
  selector: 'app-aluno',
  templateUrl: './aluno.component.html',
  styleUrls: ['./aluno.component.scss']
})
export class AlunoComponent implements OnInit {
  public static path = 'alunos';
  public displayedColumns: string[] = ['codigo', 'nome', 'options'];

  public aluno: AlunoCreate | AlunoUpdate = { nome: '' };
  public alunos: Aluno[] = []
  
  constructor(
    private service: AlunoService,
    private _snackBar: MatSnackBar
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


}
