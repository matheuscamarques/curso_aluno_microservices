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
      host: process.env.DB,
      port: 5432,
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: 'aluno',
      entities: [Aluno],
      synchronize: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
