import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCursoDto } from './dto/create-curso.dto';
import { UpdateCursoDto } from './dto/update-curso.dto';
import { Curso, uuid } from './entities/curso.entity';

@Injectable()
export class CursoService {
  constructor(@InjectRepository(Curso)
  private usersRepository: Repository<Curso>){}
  create(createCursoDto: CreateCursoDto) {
    return this.usersRepository.save(createCursoDto);
  }

  findAll() {
    return this.usersRepository.find();
  }

  findOne(codigo: uuid) {
    return this.usersRepository.findOne(codigo);
  }

  update(codigo: uuid, updateCursoDto: UpdateCursoDto) {
    return this.usersRepository.update(codigo, updateCursoDto).then(() => {
      return this.usersRepository.findOne(codigo);
    });
  }

  remove(codigo: uuid) {
    return this.usersRepository.delete(codigo).then( result => {
      return result.affected > 0;
    });
  }
}
