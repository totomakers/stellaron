import { CharacterAbilityType } from './character-ability-type';

export enum CharacterTraceType__Bonus {
  BonusStat = 'bonus-stat',
  BonusAbility = 'bonus-ability',
}

export const CharacterTraceType = {
  ...CharacterAbilityType,
  ...CharacterTraceType__Bonus,
};

export type CharacterTraceType = typeof CharacterTraceType;