import { BadRequestException, Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreatePokemon2Dto } from './dto/create-pokemon2.dto';
import { UpdatePokemon2Dto } from './dto/update-pokemon2.dto';
import { Pokemon2 } from './entities/pokemon2.entity';
import { isValidObjectId, Model } from 'mongoose';

@Injectable()
export class Pokemon2Service {
  constructor(
    @InjectModel(Pokemon2.name)
    private readonly PokemonModel: Model<Pokemon2>
  ){}

  async create(createPokemon2Dto: CreatePokemon2Dto) {
    createPokemon2Dto.name = createPokemon2Dto.name.toLowerCase();
    try{
      const pokemon = await this.PokemonModel.create(createPokemon2Dto);
      return pokemon;
    }catch(error){
      this.handleExceptions(error);
    }
 
  }

  findAll() {
    return `This action returns all pokemon2`;
  }

  async findOne(term: string) {
      let pokemon: Pokemon2;
      
      if(!isNaN(+term)) {
        pokemon = await this.PokemonModel.findOne({no: term});
      }
     //MongoID
      if(!pokemon && isValidObjectId(term)){
         pokemon = await this.PokemonModel.findById(term);
      }
     //Name
      if(!pokemon){
        pokemon = await this.PokemonModel.findOne({name: term.toLowerCase().trim()});
      } 
      if(!pokemon) {
        throw new NotFoundException(`pokemon with id, name or no "${term}" not found`);
      }
      return pokemon;
  }

  async update(term: string, updatePokemon2Dto: UpdatePokemon2Dto) {
    // TODO: Crear la logica para modificar los pokemon
    const pokemon = await this.PokemonModel.findOne();
    if( !pokemon ) throw new NotFoundException(`Pokemon with id, name or no "${term}" not found`);

    if( updatePokemon2Dto.name ) updatePokemon2Dto.name = updatePokemon2Dto.name.toLowerCase();

    try {
      await pokemon.updateOne( updatePokemon2Dto );
      return { ...pokemon.toJSON(), ...updatePokemon2Dto };
    } catch (error) {
      this.handleExceptions(error);
  }
  }

  async remove(id: string) {
    const {deletedCount} = await this.PokemonModel.deleteOne({_id: id})
    if (deletedCount === 0){
      throw new BadRequestException(`pokemon with "${id}" not found`);
    }
    return;
  }

  private handleExceptions(error: any) {
    if (error.code === 11000) {
      throw new BadRequestException(`Pokemon exists in db ${JSON.stringify(error.keyValue)}`);
    }
    console.log(error)
    throw new InternalServerErrorException('Can not create Pokemon - Check server logs');
  }

}