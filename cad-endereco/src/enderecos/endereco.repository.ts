import { EntityRepository, Repository } from 'typeorm';
import { CreateEnderecoDto } from './dtos/create-endereco.dto';
import { Endereco } from './enderecos.entity';

@EntityRepository(Endereco)
export class EnderecoRepository extends Repository<Endereco> {
    /*async create(endereco: CreateEnderecoDto)*/
}