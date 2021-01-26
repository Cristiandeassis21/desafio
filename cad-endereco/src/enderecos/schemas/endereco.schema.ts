import { typeOrmConfig } from "src/configs/typeorm.config";
import { EntitySchema } from "typeorm";
import { Endereco } from "../enderecos.entity";


export const EnderecoSchema = new EntitySchema<Endereco>({
  name: 'Endereco',
  target: Endereco,
  columns: {
    id: {
      type: Number,
      primary: true,
      generated: true,
    },
    cep: {
      type: Number,
    },
    tipologradouro: {
      type: String,
    },
    logradouro: {
      type: String,
    },
    numero: {
        type: Number,
      },
    complemento: {
        type: String,
    },
    bairro: {
        type: String,
    },
    cidade: {
        type: String,
    },
    uf: {
        type: String,
    },
  },
  
});
