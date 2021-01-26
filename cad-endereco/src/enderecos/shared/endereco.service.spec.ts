import { Test, TestingModule } from '@nestjs/testing';
import { EnderecoService } from './endereco.service';

describe('EnderecoService', () => {
  let provider: EnderecoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EnderecoService],
    }).compile();

    provider = module.get<EnderecoService>(EnderecoService);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
