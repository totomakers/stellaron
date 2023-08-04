import { Entity, Enum, ManyToOne, Property, Ref } from '@mikro-orm/core';
import { PrimaryKeyUUID } from '../decorators/PrimaryKeyUUID';
import { Character } from './character';
import { CharacterStatType } from '../enums/character-stat-type';

@Entity()
export class CharacterBaseStat {
  @PrimaryKeyUUID()
  id!: string;

  @Enum(() => CharacterStatType)
  type!: CharacterStatType;

  @Property({
    columnType: 'float',
  })
  value!: number;

  @ManyToOne(() => Character, { ref: true })
  character!: Ref<Character>;
}
