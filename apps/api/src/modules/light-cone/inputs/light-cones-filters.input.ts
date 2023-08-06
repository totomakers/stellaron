import { Field, InputType, Int } from '@nestjs/graphql';
import { Path } from '../../../db/enums/path.enum';

@InputType()
export class LightConesFiltersInput {
  // Find based on path
  @Field(() => [Path], { nullable: true })
  paths?: Path[] | null;

  // Find based on rarity
  @Field(() => [Int], { nullable: true })
  rarities?: number[] | null;

  // Search on name - rarity - path
  @Field(() => String, { nullable: true })
  query?: string | null;
}
