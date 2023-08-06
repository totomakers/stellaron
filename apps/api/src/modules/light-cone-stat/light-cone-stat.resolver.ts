import { Args, Query, Resolver } from '@nestjs/graphql';
import { LightConeStat } from '../../db/entities/light-cone-stat.entity';
import { LightConeStatService } from './light-cone-stat.service';
import { LightConeStatsFiltersInput } from './inputs/light-cone-stats-filters.input';

@Resolver(() => LightConeStat)
export class LightConeStatResolver {
  constructor(private readonly lightConeStatService: LightConeStatService) {}

  @Query(() => [LightConeStat])
  public lightConeStats(
    @Args('filters', { type: () => LightConeStatsFiltersInput, nullable: true })
    filters?: LightConeStatsFiltersInput,
  ) {
    return this.lightConeStatService.getAll(filters);
  }
}
