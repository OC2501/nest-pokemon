import { Injectable } from '@nestjs/common';
import  axios, { AxiosInstance } from 'axios';
import { PokeResponse } from './interfaces/poke-response.interfaces';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Pokemon2 } from 'src/pokemon2/entities/pokemon2.entity';
import { AxiosAdapter } from 'src/common/adapters/axios.adapter';


@Injectable()
export class SeedService {

  //private readonly axios: AxiosInstance = axios;  
  
  constructor(
    @InjectModel(Pokemon2.name)
    private readonly PokemonModel: Model<Pokemon2>,
    private readonly http: AxiosAdapter,
  ) {}

  async executedSeed() {

    await this.PokemonModel.deleteMany({});

    const data: PokeResponse = await this.http.get<PokeResponse>('https://pokeapi.co/api/v2/pokemon?limit=650');

    const PokemonToInsert: {no: number, name: string}[] = [];

    data.results.forEach(async ({name, url}) => {
      const segments = url.split('/');
      const no: number = +segments[segments.length - 2];
     // const pokemon = await this.PokemonModel.create({no, name});
      PokemonToInsert.push({no, name});
    });

    await this.PokemonModel.insertMany(PokemonToInsert);
    return 'seed executed';
  }

}
