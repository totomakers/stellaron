import { Module } from '@nestjs/common';
import { LightConeResolver } from './light-cone.resolver';
import { LightConeService } from './light-cone.service';

@Module({
  providers: [LightConeResolver, LightConeService],
})
export class LightConeModule {}
