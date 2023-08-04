import { Entity, Enum, ManyToOne, Property, Ref } from '@mikro-orm/core';
import { PrimaryKeyUUID } from '../decorators/primary-key-uuid.decorator';
import { Character } from './character.entity';
import { CharacterStatType } from '../enums/character-stat-type.enum';

@Entity()
export class CharacterStat {
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
