import { Component, OnInit } from '@angular/core';
import { CursoService } from 'src/app/services/curso.service';

@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.scss']
})
export class CursoComponent implements OnInit {
  static path = 'cursos';


  constructor(
    private service : CursoService
  ) { }

  ngOnInit(): void {
  }

}
