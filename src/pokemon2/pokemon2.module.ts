import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Pokemon2Service } from './pokemon2.service';
import { Pokemon2Controller } from './pokemon2.controller';
import { Pokemon2, PokemonSchema2 } from './entities/pokemon2.entity';
import { ConfigModule } from '@nestjs/config';

@Module({
  controllers: [Pokemon2Controller],
  providers: [Pokemon2Service],
  imports: [
    ConfigModule,
    MongooseModule.forFeature([
    { 
     name: Pokemon2.name, 
     schema: PokemonSchema2 
   },
   ]),
 ],
  exports: [
    MongooseModule,
  ]
})
export class Pokemon2Module {}
