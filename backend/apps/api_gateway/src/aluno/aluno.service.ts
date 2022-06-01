import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { CreateAlunoDto } from './dto/create-aluno.dto';
import { UpdateAlunoDto } from './dto/update-aluno.dto';
import { Aluno, uuid } from './entities/aluno.entity';

@Injectable()
export class AlunoService {
  constructor(
    @Inject('ALUNO_SERVICE') private readonly client : ClientProxy,
  ) {}

  create(createAlunoDto: CreateAlunoDto) {
    return this.client.send<Aluno>('createAluno', createAlunoDto);
  }

  findAll() {
    return this.client.send<Aluno[]>('findAllAluno', {});
  }

  findOne(codigo: uuid) {
    return this.client.send<Aluno>('findOneAluno', {codigo});
  }

  update(codigo: uuid, updateAlunoDto: UpdateAlunoDto) {
    return this.client.send<Aluno>('updateAluno', {codigo, ...updateAlunoDto});
  }

  remove(codigo: uuid) {
    return this.client.send<boolean>('removeAluno', {codigo});
  }
}
