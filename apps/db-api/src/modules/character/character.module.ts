import { Module } from '@nestjs/common';
import { CharacterResolver } from './character.resolver';
import { CharacterService } from './character.service';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { Character } from '../../db/entities/character.entity';

@Module({
  imports: [
    MikroOrmModule.forFeature({
      entities: [Character],
    }),
  ],
  providers: [CharacterResolver, CharacterService],
  exports: [CharacterService],
})
export class CharacterModule {}
