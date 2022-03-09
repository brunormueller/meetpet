import { Test, TestingModule } from '@nestjs/testing';
import { PetisController } from './petis.controller';
import { PetisService } from './petis.service';

describe('PetisController', () => {
  let controller: PetisController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PetisController],
      providers: [PetisService],
    }).compile();

    controller = module.get<PetisController>(PetisController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
