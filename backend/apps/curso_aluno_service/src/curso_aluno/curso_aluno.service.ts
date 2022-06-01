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


  findAllByAluno(codigo: uuid) {
    return this.repo.find({
      where: {
        codigo_aluno: codigo
      }
    });
  }
  findAllByCurso(codigo: uuid) {
    return this.repo.find({
      where: {
        codigo_curso: codigo  
      }
    })
  }
  create(createCursoAlunoDto: CreateCursoAlunoDto) {
    return this.repo.create(createCursoAlunoDto)
  }

  findOne(codigo: uuid) {
    return this.repo.find(codigo)
  }

  update(codigo: uuid, updateCursoAlunoDto: UpdateCursoAlunoDto) {
    return this.repo.update(codigo,updateCursoAlunoDto)
  }

  remove(codigo: uuid) {
    return this.repo.delete(codigo)
  }
}
