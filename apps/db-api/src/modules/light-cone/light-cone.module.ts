import { Module } from '@nestjs/common';
import { LightConeResolver } from './light-cone.resolver';

@Module({
  providers: [LightConeResolver],
})
export class LightConeModule {}
