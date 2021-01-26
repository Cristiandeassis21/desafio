import { EnderecosController } from './enderecos.controller';
import { Module } from '@nestjs/common';
import { EnderecoService } from './shared/endereco.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EnderecoSchema } from './schemas/endereco.schema';

@Module({
    imports: [TypeOrmModule.forFeature([EnderecoSchema])],
    controllers: [EnderecosController],
    providers: [EnderecoService]
})
export class EnderecosModule {}
