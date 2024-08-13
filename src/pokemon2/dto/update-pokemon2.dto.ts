import { PartialType } from '@nestjs/mapped-types';
import { CreatePokemon2Dto } from './create-pokemon2.dto';

export class UpdatePokemon2Dto extends PartialType(CreatePokemon2Dto) {}
