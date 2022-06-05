import { Inject } from "@angular/core";
import { AlunoService } from "../services/aluno.service";
import { CursoAlunoService } from "../services/curso-aluno.service";
import { CursoService } from "../services/curso.service";
import { Curso } from "./curso";

export type uuid = string;

export class Aluno {
    public codigo: uuid = '';
    public nome: string = '';
    public cursos: Curso[] = [];
}
