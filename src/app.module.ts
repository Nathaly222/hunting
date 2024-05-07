import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { CreaturesModule } from './creatures/creatures.module';
import { ExtinctModule } from './extinct/extinct.module';

@Module({
  imports: [PrismaModule, CreaturesModule, ExtinctModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
