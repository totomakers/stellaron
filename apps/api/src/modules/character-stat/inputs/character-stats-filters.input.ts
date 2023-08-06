import { Field, ID, InputType } from '@nestjs/graphql';
import { CharacterStatType } from '../../../db/enums/character-stat-type.enum';
import { Character } from '../../../db/entities/character.entity';

@InputType()
export class CharacterStatsFiltersInput {
  @Field(() => [CharacterStatType], { nullable: true })
  type?: CharacterStatType[] | null;

  @Field(() => [ID], { nullable: true })
  characterIds?: Character['id'][];
}
