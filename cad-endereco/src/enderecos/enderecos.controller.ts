import { Body, Controller, Get, Param, Post, Put, Delete } from '@nestjs/common';
import { Endereco } from './shared/endereco';
import { EnderecoService } from './shared/endereco.service';

@Controller('enderecos')
export class EnderecosController {
    constructor(
        private enderecoService: EnderecoService
    ){}

    @Get()
    async getAll() : Promise<Endereco[]>{
        return this.enderecoService.getAll();
    }

    @Get(':cep')
    async getByCep(@Param('cep') cep: number) : Promise<Endereco>{
        return this.enderecoService.getByCep(cep);
    }

    /*@Post()
    async create(@Body() endereco: Endereco): Promise<Endereco>{
        return this.enderecoService.create(endereco);
    }

    @Put(':cep')
    async update(@Param('cep') cep: number, @Body() endereco: Endereco): Promise<Endereco>{
        endereco.cep = cep;
        return this.enderecoService.update(endereco);
    }*/

    @Delete(':cep')
    async delete(@Param('cep') cep: number){
        this.enderecoService.delete(cep);
    }
}

