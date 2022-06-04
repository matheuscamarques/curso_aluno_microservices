import { Injectable } from "@angular/core";
import { CursoAlunoService } from "../services/curso-aluno.service";
import { CursoService } from "../services/curso.service";
import { Aluno } from "./aluno";

export class Curso {
    public nome: string = '';
    public alunos: Aluno[] = [];
}
