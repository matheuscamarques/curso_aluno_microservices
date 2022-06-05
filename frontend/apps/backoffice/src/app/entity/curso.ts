import { Aluno } from "./aluno";

export class Curso {
    public codigo: string = '';
    public descricao: string = '';
    public emenda: string = '';

    public alunos: Aluno[] = [];
}
