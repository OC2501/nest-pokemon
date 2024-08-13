import { IsInt,IsPositive,Min,IsString,MinLength } from "class-validator";
export class CreatePokemon2Dto {
    @IsInt()
    @IsPositive()
    @Min(1)
    no: number;
    
    @IsString()
    @MinLength(3)
    name: string;
}
