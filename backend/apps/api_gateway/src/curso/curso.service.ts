import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { uuid } from 'src/aluno/entities/aluno.entity';
import { CreateCursoDto } from './dto/create-curso.dto';
import { UpdateCursoDto } from './dto/update-curso.dto';

@Injectable()
export class CursoService {
  constructor(
    @Inject('CURSO_SERVICE') private readonly client : ClientProxy,
  ) {}
  create(createCursoDto: CreateCursoDto) {
    return this.client.send<string>('createCurso', createCursoDto);
  }

  findAll() {
    return this.client.send<string[]>('findAllCurso', {});
  }

  findOne(codigo: uuid) {
    return this.client.send<string>('findOneCurso', {codigo});
  }

  update(codigo: uuid, updateCursoDto: UpdateCursoDto) {
    return this.client.send<string>('updateCurso', {codigo, ...updateCursoDto});
  }

  remove(codigo: uuid) {
    return  this.client.send<string>('removeCurso', {codigo});
  }
}
