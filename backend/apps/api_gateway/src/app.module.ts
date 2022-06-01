import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AlunoModule } from './aluno/aluno.module';
import { CursoModule } from './curso/curso.module';
import { CursoAlunoModule } from './curso_aluno/curso_aluno.module';


@Module({
  imports: [AlunoModule, CursoModule, CursoAlunoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
