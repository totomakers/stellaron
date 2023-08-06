import { Parent, ResolveField, Resolver } from '@nestjs/graphql';
import { LightConeStatService } from './light-cone-stat.service';
import { LightCone } from '../../db/entities/light-cone.entity';
import { LightConeStat } from '../../db/entities/light-cone-stat.entity';

@Resolver(() => LightCone)
export class LightConeStatLightConeResolver {
  constructor(private readonly lightConeStatService: LightConeStatService) {}

  @ResolveField(() => [LightConeStat])
  stats(@Parent() parent: LightCone) {
    return this.lightConeStatService.getAll({
      lightConeIds: [parent.id],
    });
  }
}
