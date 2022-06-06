import { Component, OnInit } from '@angular/core';
import { Curso } from 'src/app/entity/curso';

@Component({
  selector: 'app-create-curso-modal',
  templateUrl: './create-curso-modal.component.html',
  styleUrls: ['./create-curso-modal.component.scss']
})
export class CreateCursoModalComponent implements OnInit {
  public curso = new Curso();
  constructor() { }

  ngOnInit(): void {
  }

  updateDescricao(event: Event){
    this.curso.descricao = (event.target as HTMLInputElement).value;
  }

  updateEmenda(event: Event){
    this.curso.emenda = (event.target as HTMLInputElement).value;
  }
}
