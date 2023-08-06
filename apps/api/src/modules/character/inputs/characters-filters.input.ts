import { Field, InputType, Int } from '@nestjs/graphql';
import { Path } from '../../../db/enums/path.enum';
import { CombatType } from '../../../db/enums/combat-type.enum';

@InputType()
export class CharactersFiltersInput {
  @Field(() => [Path], { nullable: true })
  paths?: Path[] | null;

  @Field(() => [Int], { nullable: true })
  rarities?: number[] | null;

  @Field(() => [CombatType], { nullable: true })
  combatTypes?: CombatType[] | null;

  @Field(() => String, { nullable: true })
  query?: string | null;
}
