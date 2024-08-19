import {MongooseModule} from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { Pokemon2Module } from './pokemon2/pokemon2.module';
import { CommonModule } from './common/common.module';
import { SeedModule } from './seed/seed.module';
import { ConfigModule } from '@nestjs/config';
import { EnvConfiiguration } from './config/app.config';
import { JoiValidationSchema } from './config/joi.validation';
@Module({
  imports: [

    ConfigModule.forRoot({

      envFilePath: '.env',
      load: [EnvConfiiguration],
      validationSchema: JoiValidationSchema,
    }),

    MongooseModule.forRoot(process.env.MONGODB,{
      dbName:'pokemonsDb'
    }
    ),

    Pokemon2Module,

    CommonModule,

    SeedModule

  ],
})
export class AppModule {}
