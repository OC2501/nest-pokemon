import { Controller, Get, Post, Body, Patch, Param, Delete, HttpCode, HttpStatus, Query } from '@nestjs/common';
import { Pokemon2Service } from './pokemon2.service';
import { CreatePokemon2Dto } from './dto/create-pokemon2.dto';
import { UpdatePokemon2Dto } from './dto/update-pokemon2.dto';
import { ParseMongoIdPipe } from 'src/common/pipes/parse-mongo-id/parse-mongo-id.pipe';
import { PaginationDto } from 'src/common/dto/pagination.Dto';

@Controller('pokemon2')
export class Pokemon2Controller {
  constructor(private readonly pokemon2Service: Pokemon2Service) {}

  @Post()
  //@HttpCode(HttpStatus.OK)
  create(@Body() createPokemon2Dto: CreatePokemon2Dto) {
    return this.pokemon2Service.create(createPokemon2Dto);
  }

  @Get()
  findAll(@Query() paginationDto: PaginationDto) {
    //console.log({paginationDto});

    return this.pokemon2Service.findAll(paginationDto);
  }

  @Get(':term')
  findOne(@Param('term') term: string) {
    return this.pokemon2Service.findOne(term);
  }

  @Patch(':term')
  update(@Param('term') term: string, @Body() updatePokemon2Dto: UpdatePokemon2Dto) {
    return this.pokemon2Service.update(term, updatePokemon2Dto);
  }

  @Delete(':id')
  remove(@Param('id', ParseMongoIdPipe) id: string) {
    return this.pokemon2Service.remove(id);
  }
}
