import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

export type uuid = string;

@Entity()
export class Aluno {
    @PrimaryGeneratedColumn("uuid")
    codigo: uuid;
    @Column({
        length: 50
    })
    nome : string
}
