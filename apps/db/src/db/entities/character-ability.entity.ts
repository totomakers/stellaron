import { Entity, Enum, ManyToOne, Ref } from '@mikro-orm/core';
import { PrimaryKeyUUID } from '../decorators/primary-key-uuid.decorator';
import { Character } from './character.entity';
import { CharacterAbilityType } from '../enums/character-ability-type.enum';

@Entity()
export class CharacterAbility {
  @PrimaryKeyUUID()
  id!: string;

  @ManyToOne(() => Character, { ref: true })
  character!: Ref<Character>;

  @Enum(() => CharacterAbilityType)
  type!: CharacterAbilityType;
}
