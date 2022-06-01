import { Injectable } from '@nestjs/common';
import { CreateCursoAlunoDto } from './dto/create-curso_aluno.dto';
import { UpdateCursoAlunoDto } from './dto/update-curso_aluno.dto';

@Injectable()
export class CursoAlunoService {
  create(createCursoAlunoDto: CreateCursoAlunoDto) {
    return 'This action adds a new cursoAluno';
  }

  findAll() {
    return `This action returns all cursoAluno`;
  }

  findOne(id: number) {
    return `This action returns a #${id} cursoAluno`;
  }

  update(id: number, updateCursoAlunoDto: UpdateCursoAlunoDto) {
    return `This action updates a #${id} cursoAluno`;
  }

  remove(id: number) {
    return `This action removes a #${id} cursoAluno`;
  }
}
