import { Field, ID, InputType } from '@nestjs/graphql';
import { CharacterStatType } from '../../../db/enums/character-stat-type.enum';
import { LightCone } from '../../../db/entities/light-cone.entity';

@InputType()
export class LightConeStatsFiltersInput {
  @Field(() => [CharacterStatType], { nullable: true })
  type?: CharacterStatType[] | null;

  @Field(() => [ID], { nullable: true })
  lightConeIds?: LightCone['id'][];
}
