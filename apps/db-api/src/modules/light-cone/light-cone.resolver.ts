import { Query, ResolveField, Resolver } from '@nestjs/graphql';
import { LightCone } from '../../db/entities/light-cone.entity';
import { LightConeStat } from '../../db/entities/light-cone-stat.entity';

@Resolver(() => LightCone)
export class LightConeResolver {
  @Query(() => [LightCone])
  lightCones() {
    return [];
  }

  @ResolveField(() => LightConeStat)
  stats() {
    return [];
  }
}
