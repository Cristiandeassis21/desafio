import { Entity, Column, PrimaryGeneratedColumn, BaseEntity } from 'typeorm';

@Entity()
export class Endereco extends BaseEntity{

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    cep: number;

    @Column()
    tipologradouro: string;

    @Column()
    logradouro: string;

    @Column()
    numero: number;

    @Column()
    complemento: string;

    @Column()
    bairro: string;

    @Column()
    cidade: string;

    @Column()
    uf: string;

}