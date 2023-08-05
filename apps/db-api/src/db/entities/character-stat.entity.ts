import {
  Entity,
  Enum,
  EnumType,
  ManyToOne,
  Property,
  Ref,
  Unique,
} from '@mikro-orm/core';
import { PrimaryKeyUUID } from '../decorators/primary-key-uuid.decorator';
import { Character } from './character.entity';
import { CharacterStatType } from '../enums/character-stat-type.enum';
import { Field, Float, ID, ObjectType } from '@nestjs/graphql';

@Entity()
@Unique<CharacterStat>({
  properties: ['character', 'type'],
})
@ObjectType()
export class CharacterStat {
  @PrimaryKeyUUID()
  @Field(() => ID)
  id!: string;

  @Enum({ type: EnumType, items: () => CharacterStatType })
  @Field(() => CharacterStatType)
  type!: CharacterStatType;

  @Property({
    type: 'float',
  })
  @Field(() => Float)
  value!: number;

  // Relations

  @ManyToOne(() => Character, { ref: true })
  character!: Ref<Character>;
}
