import { registerEnumType } from '@nestjs/graphql';

export enum CharacterStatType_Base {
  Hp = 'hp',
  Atk = 'atk',
  Def = 'def',
  Spd = 'spd',
}

export enum CharacterStatType_Advanced {
  CritRate = 'crit-rate',
  CritDmg = 'crit-dmg',
  BreakEffect = 'break-effect',
  OutgoingHealingBoost = 'outgoing-healing-boost',
  MaxEnergy = 'max-energy',
  EnergyRegenerationRate = 'energy-regeneration-rate',
  EffectHitRate = 'effect-hit-rate',
  EffectRes = 'effect-res',
}

export enum CharacterStatType_DmgType {
  FireDmgBoost = 'fire-dmg-boost',
  IceDmgBoost = 'ice-dmg-boost',
  LightningDmgBoost = 'lightning-dmg-boost',
  WindDmgBoost = 'wind-dmg-boost',
  QuantumDmgBoost = 'quantum-dmg-boost',
  ImaginaryDmgBoost = 'imaginary-dmg-boost',

  FireResBoost = 'fire-res-boost',
  IceResBoost = 'ice-res-boost',
  LightningResBoost = 'lightning-res-boost',
  WindResBoost = 'wind-res-boost',
  QuantumResBoost = 'quantum-res-boost',
  ImaginaryResBoost = 'imaginary-res-boost',
}

export const CharacterStatType = {
  ...CharacterStatType_Base,
  ...CharacterStatType_DmgType,
  ...CharacterStatType_Advanced,
};

export type CharacterStatType = typeof CharacterStatType;

registerEnumType(CharacterStatType, {
  name: 'CharacterStatType',
});
