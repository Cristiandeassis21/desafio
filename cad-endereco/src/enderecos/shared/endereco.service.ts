import { createParamDecorator, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateEnderecoDto } from '../dtos/create-endereco.dto';
import { EnderecoRepository } from '../endereco.repository';
import { Endereco } from '../enderecos.entity';

@Injectable()
export class EnderecoService {
    constructor(
        @InjectRepository(Endereco)
        private enderecoRepository: Repository<Endereco>,
      ) {}
      

    getAll(): Promise<Endereco[]>{
        return this.enderecoRepository.find();
    }

    getByCep(cep: number): Promise<Endereco>{
        const endereco = this.enderecoRepository.findOne(cep);
        return endereco;
    }

 /*   create(endereco: Endereco): Promise<Endereco>{
        let lastCep = 0;
        if(this.endereco.length > 0){
            lastCep = this.enderecoRepository[this.enderecoRepository.length - 1].cep;
        }

        endereco.cep = lastCep + 1;
        this.enderecoRepository.push(endereco);

        return endereco;
    }

    update(endereco: Endereco){
        const enderecoArray = this.getByCep(endereco.cep);
        if(enderecoArray){
            enderecoArray.tipologradouro = endereco.tipologradouro;
            enderecoArray.logradouro = endereco.logradouro;
            enderecoArray.numero = endereco.numero;
            enderecoArray.complemento = endereco.complemento;
            enderecoArray.bairro = endereco.bairro;
            enderecoArray.cidade = endereco.cidade;
            enderecoArray.uf = endereco.uf;
        }
        return enderecoArray;
    }*/

    async delete(cep: number): Promise<void>{
        await this.enderecoRepository.softDelete(cep);
    }
}
