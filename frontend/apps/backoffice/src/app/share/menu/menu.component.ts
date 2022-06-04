import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuThree } from '../lib/menu-three';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  public menuList : MenuThree[] = [
    {
      title : 'Alunos',
      routerLink : '/alunos'
    },
    {
      title : 'Cursos',
      routerLink : '/cursos'
    }
  ]


  constructor(
    private router : Router
  ) { }

  ngOnInit(): void {
  }

  moveTo(routerLink : string) {
    console.log(routerLink);
    this.router.navigate([routerLink]);
  }

}
