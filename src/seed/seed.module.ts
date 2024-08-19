import { Module } from '@nestjs/common';
import { SeedService } from './seed.service';
import { SeedController } from './seed.controller';
import { Pokemon2Module } from 'src/pokemon2/pokemon2.module';
import { CommonModule } from 'src/common/common.module';

@Module({
  controllers: [SeedController],
  providers: [SeedService],
  imports: [
    Pokemon2Module,
    CommonModule,
  ],
})
export class SeedModule {}
