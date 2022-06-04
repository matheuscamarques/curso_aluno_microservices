import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlunoComponent } from './view/aluno/aluno.component';
import { CursoComponent } from './view/curso/curso.component';
function staticImplements<T>() {
  return <U extends T>(constructor: U) => {constructor};
}


const routes: Routes = [
  {
    path: AlunoComponent.path,
    component: AlunoComponent,
  },
  {
    path: CursoComponent.path,
    component: CursoComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
