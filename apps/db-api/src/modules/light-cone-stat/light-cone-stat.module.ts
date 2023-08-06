import { Module } from '@nestjs/common';
import { LightConeStatService } from './light-cone-stat.service';
import { LightConeStatResolver } from './light-cone-stat.resolver';
import { LightConeStatLightConeResolver } from './light-cone-stat.light-cone.resolver';

@Module({
  providers: [
    LightConeStatService,
    LightConeStatResolver,
    LightConeStatLightConeResolver,
  ],
})
export class LightConeStatModule {}
