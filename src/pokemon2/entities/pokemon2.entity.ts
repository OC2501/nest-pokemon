import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
@Schema()
export class Pokemon2 {
    @Prop({
        unique: true,
        index: true
    })
    name: string;

    @Prop({
        unique: true,
        index: true
    })
    no: number;

}

export const PokemonSchema2 = SchemaFactory.createForClass(Pokemon2);