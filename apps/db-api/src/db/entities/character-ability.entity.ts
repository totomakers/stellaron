import { Entity, Enum, ManyToOne, Ref } from '@mikro-orm/core';
import { PrimaryKeyUUID } from '../decorators/primary-key-uuid.decorator';
import { Character } from './character.entity';
import { CharacterAbilityType } from '../enums/character-ability-type.enum';
import { Field, ID, ObjectType } from '@nestjs/graphql';

@Entity()
@ObjectType()
export class CharacterAbility {
  @PrimaryKeyUUID()
  @Field(() => ID)
  id!: string;

  @Enum(() => CharacterAbilityType)
  @Field(() => CharacterAbilityType)
  type!: CharacterAbilityType;

  // Relations
  @ManyToOne(() => Character, { ref: true })
  character!: Ref<Character>;
}
