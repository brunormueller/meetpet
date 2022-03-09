import { Test, TestingModule } from '@nestjs/testing';
import { PetisService } from './petis.service';

describe('PetisService', () => {
  let service: PetisService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PetisService],
    }).compile();

    service = module.get<PetisService>(PetisService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
