import { Module } from '@nestjs/common';
import { CharacterStatResolver } from './character-stat.resolver';
import { CharacterStatService } from './character-stat.service';
import { CharacterStatCharacterResolver } from './character-stat.character.resolver';

@Module({
  providers: [
    CharacterStatResolver,
    CharacterStatCharacterResolver,
    CharacterStatService,
  ],
})
export class CharacterStatModule {}
