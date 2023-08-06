import { registerEnumType } from '@nestjs/graphql';

export enum CombatType {
  Fire = 'fire',
  Ice = 'ice',
  Lightning = 'lightning',
  Wind = 'wind',
  Quantum = 'quantum',
  Imaginary = 'imaginary',
  Physical = 'physical',
}

registerEnumType(CombatType, {
  name: 'CombatType',
});
