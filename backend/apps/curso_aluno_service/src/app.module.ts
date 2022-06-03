import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CursoAlunoModule } from './curso_aluno/curso_aluno.module';
import { CursoAluno } from './curso_aluno/entities/curso_aluno.entity';

@Module({
  imports: [CursoAlunoModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB,
      port: 5432,
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: 'curso_aluno',
      entities: [CursoAluno],
      synchronize: true,
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
