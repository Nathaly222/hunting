import { Test, TestingModule } from '@nestjs/testing';
import { ExtinctController } from './extinct.controller';
import { ExtinctService } from './extinct.service';

describe('ExtinctController', () => {
  let controller: ExtinctController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ExtinctController],
      providers: [ExtinctService],
    }).compile();

    controller = module.get<ExtinctController>(ExtinctController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
