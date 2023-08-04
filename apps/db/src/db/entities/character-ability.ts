import { Entity, Enum, ManyToOne, Ref } from '@mikro-orm/core';
import { PrimaryKeyUUID } from '../decorators/PrimaryKeyUUID';
import { Character } from './character';
import { CharacterAbilityType } from '../enums/character-ability-type';

@Entity()
export class CharacterAbility {
  @PrimaryKeyUUID()
  id!: string;

  @ManyToOne(() => Character, { ref: true })
  character!: Ref<Character>;

  @Enum(() => CharacterAbilityType)
  type!: CharacterAbilityType;
}
