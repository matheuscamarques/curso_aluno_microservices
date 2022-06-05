import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlunoComponent } from './view/aluno/aluno.component';
import { CursoComponent } from './view/curso/curso.component';
import { AlunoPageComponent } from './view/internal-page/aluno-page/aluno-page.component';
import { CursoPageComponent } from './view/internal-page/curso-page/curso-page.component';

const routes: Routes = [
  {
    path: AlunoComponent.path,
    component: AlunoComponent,
  },
  {
    path: AlunoPageComponent.path,
    component: AlunoPageComponent,
  },
  {
    path: CursoComponent.path,
    component: CursoComponent,
  },
  {
    path: CursoPageComponent.path,
    component: CursoPageComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
