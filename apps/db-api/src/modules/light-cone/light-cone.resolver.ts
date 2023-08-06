import { Args, Query, Resolver } from '@nestjs/graphql';
import { LightCone } from '../../db/entities/light-cone.entity';
import { LightConesFiltersInput } from './inputs/light-cones-filters.input';
import { LightConeService } from './light-cone.service';

@Resolver(() => LightCone)
export class LightConeResolver {
  constructor(private readonly lightConeService: LightConeService) {}

  @Query(() => [LightCone])
  lightCones(
    @Args('filters', { type: () => LightConesFiltersInput, nullable: true })
    filters?: LightConesFiltersInput,
  ) {
    return this.lightConeService.getAll(filters);
  }
}
