import {MongooseModule} from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { Pokemon2Module } from './pokemon2/pokemon2.module';
import { CommonModule } from './common/common.module';
@Module({
  imports: [

    MongooseModule.forRoot('mongodb://localhost:27017/nest-pokemon'),

    Pokemon2Module,

    CommonModule

  ],
})
export class AppModule {}
