import { Module } from '@nestjs/common';
import { ExtinctService } from './extinct.service';
import { ExtinctController } from './extinct.controller';

@Module({
  controllers: [ExtinctController],
  providers: [ExtinctService],
})
export class ExtinctModule {}
