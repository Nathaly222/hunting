import { Test, TestingModule } from '@nestjs/testing';
import { ExtinctService } from './extinct.service';

describe('ExtinctService', () => {
  let service: ExtinctService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ExtinctService],
    }).compile();

    service = module.get<ExtinctService>(ExtinctService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
