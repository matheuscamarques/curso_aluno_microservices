import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MenuComponent } from './share/menu/menu.component';
import { MatMenuModule } from '@angular/material/menu';
import { AlunoComponent } from './view/aluno/aluno.component';
import { CursoComponent } from './view/curso/curso.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormAlunoComponent } from './share/forms/aluno/aluno.component';
import { MatInputModule } from "@angular/material/input";
import { HttpClientModule } from '@angular/common/http';
import {MatTableModule} from '@angular/material/table';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatTooltipModule} from '@angular/material/tooltip';
import { AlunoPageComponent } from './view/internal-page/aluno-page/aluno-page.component';
import { CursoPageComponent } from './view/internal-page/curso-page/curso-page.component';



@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    AlunoComponent,
    CursoComponent,
    FormAlunoComponent,
    AlunoPageComponent,
    CursoPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatFormFieldModule,
    MatInputModule,
    HttpClientModule,
    MatTableModule,
    MatSnackBarModule,
    MatTooltipModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
