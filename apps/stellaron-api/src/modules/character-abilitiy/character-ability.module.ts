import { Module } from '@nestjs/common';
import { CharacterAbilityCharacterResolver } from './character-ability.character.resolver';

@Module({
  providers: [CharacterAbilityCharacterResolver],
})
export class CharacterAbilityModule {}
