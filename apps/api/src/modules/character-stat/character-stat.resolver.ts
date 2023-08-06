import { Args, Query, Resolver } from '@nestjs/graphql';
import { CharacterStat } from '../../db/entities/character-stat.entity';
import { CharacterStatsFiltersInput } from './inputs/character-stats-filters.input';
import { CharacterStatService } from './character-stat.service';

@Resolver(() => CharacterStat)
export class CharacterStatResolver {
  constructor(private readonly characterStatService: CharacterStatService) {}

  @Query(() => [CharacterStat])
  public characterStats(
    @Args('filters', { type: () => CharacterStatsFiltersInput, nullable: true })
    filters?: CharacterStatsFiltersInput,
  ) {
    return this.characterStatService.getAll(filters);
  }
}
