import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCursoAlunoDto } from './dto/create-curso_aluno.dto';
import { UpdateCursoAlunoDto } from './dto/update-curso_aluno.dto';
import { CursoAluno, uuid } from './entities/curso_aluno.entity';

@Injectable()
export class CursoAlunoService {
  constructor(@InjectRepository(CursoAluno)
  private repo: Repository<CursoAluno>){
    
  }

  async findAllByAluno(codigo: uuid) {
    return (await this.repo.find({
      where: {
        codigo_aluno: codigo,
      },
    })).map(cursoAluno => `${cursoAluno.codigo_curso}`)
  }
  async findAllByCurso(codigo: uuid) {
    return (await this.repo.find({
      where: {
        codigo_curso: codigo  
      }
    })).map(cursoAluno => `${cursoAluno.codigo_aluno}`)
  }

  create(createCursoAlunoDto: CreateCursoAlunoDto) {
    return this.repo.save(createCursoAlunoDto)
  }

  remove(codigo: uuid) {
    return this.repo.delete(codigo)
  }
}
