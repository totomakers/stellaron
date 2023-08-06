import { Field, ID, InputType } from '@nestjs/graphql';
import { Character } from '../../../db/entities/character.entity';
import { CharacterTraceType } from '../../../db/enums/character-trace-type.enum';

@InputType()
export class CharacterTracesFiltersInput {
  @Field(() => [CharacterTraceType], { nullable: true })
  type?: CharacterTraceType[] | null;

  @Field(() => [ID], { nullable: true })
  characterIds?: Character['id'][];

  @Field(() => String, { nullable: true })
  query?: string | null;
}
