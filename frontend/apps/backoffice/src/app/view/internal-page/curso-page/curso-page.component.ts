import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-curso-page',
  templateUrl: './curso-page.component.html',
  styleUrls: ['./curso-page.component.scss']
})
export class CursoPageComponent implements OnInit {
  static path = 'cursos/:id';

  
  constructor() { }

  ngOnInit(): void {
  }

}
