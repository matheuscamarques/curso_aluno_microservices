import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { AlunoCreate } from 'src/app/dtos/aluno/aluno-create';
import { AlunoUpdate } from 'src/app/dtos/aluno/aluno-update';

@Component({
  selector: 'form-aluno',
  templateUrl: './aluno.component.html',
  styleUrls: ['./aluno.component.scss']
})
export class FormAlunoComponent implements OnInit {
  @Output('aluno') 
  public event = new EventEmitter<AlunoCreate | AlunoUpdate>();

  constructor() { }

  ngOnInit(): void {}

  onChange(event: Event) {
    const target = event.target as HTMLInputElement;
    this.event.emit({
      nome: target.value,
    });
  }
}
