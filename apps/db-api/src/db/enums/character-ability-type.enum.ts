import { registerEnumType } from '@nestjs/graphql';

export enum CharacterAbilityType {
  BasicAtk = 'basic-atk',
  Talent = 'talent',
  Skill = 'skill',
  Technique = 'technique',
}

registerEnumType(CharacterAbilityType, {
  name: 'CharacterAbilityType',
});
