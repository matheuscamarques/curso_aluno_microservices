import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { uuid } from 'src/aluno/entities/aluno.entity';
import { CreateCursoAlunoDto } from './dto/create-curso_aluno.dto';
import { UpdateCursoAlunoDto } from './dto/update-curso_aluno.dto';

@Injectable()
export class CursoAlunoService {
  constructor(
    @Inject('CURSO_ALUNO_SERVICE') private readonly client : ClientProxy,
  ) {}

  create(createCursoAlunoDto: CreateCursoAlunoDto) {
    return this.client.send<string>('createCursoAluno', createCursoAlunoDto);
  }

  remove(createCursoAlunoDto: CreateCursoAlunoDto) {
    return  this.client.send<string>('removeCursoAluno', createCursoAlunoDto);
  }

  findAllByCurso(codigo: uuid) {
    return this.client.send<string[]>('findAllByCurso', codigo);
  }
  findAllByAluno(codigo: uuid) {
    return this.client.send<string[]>('findAllByAluno', codigo);
  }
}
