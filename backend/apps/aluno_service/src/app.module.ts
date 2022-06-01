import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AlunoModule } from './aluno/aluno.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Aluno } from './aluno/entities/aluno.entity';

@Module({
  imports: [AlunoModule,
   TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '159753',
      database: 'aluno',
      entities: [Aluno],
      synchronize: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
