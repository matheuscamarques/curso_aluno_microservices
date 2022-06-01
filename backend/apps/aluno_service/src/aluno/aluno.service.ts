import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateAlunoDto } from './dto/create-aluno.dto';
import { UpdateAlunoDto } from './dto/update-aluno.dto';
import { Aluno, uuid } from './entities/aluno.entity';

@Injectable()
export class AlunoService {
  constructor(@InjectRepository(Aluno)
  private usersRepository: Repository<Aluno>){
    
  }
  create(createAlunoDto: CreateAlunoDto) {
    return this.usersRepository.save(createAlunoDto);
  }

  findAll() {
    return this.usersRepository.find();
  }

  findOne(codigo: uuid) {
    return this.usersRepository.findOne(codigo);
  }

  update(codigo: uuid, updateAlunoDto: UpdateAlunoDto) {
    return this.usersRepository.update(codigo, updateAlunoDto).then(() => {
      return this.usersRepository.findOne(codigo);
    });
  }

  remove(codigo: uuid) {
    return this.usersRepository.delete(codigo).then( result => {
      return result.affected > 0;
    })
  }
}
