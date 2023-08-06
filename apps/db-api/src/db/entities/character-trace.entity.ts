import {
  Entity,
  Enum,
  EnumType,
  ManyToOne,
  Property,
  Ref,
} from '@mikro-orm/core';
import { PrimaryKeyUUID } from '../decorators/primary-key-uuid.decorator';
import { Character } from './character.entity';
import { CharacterTraceType } from '../enums/character-trace-type.enum';
import { Field, ID, ObjectType } from '@nestjs/graphql';

@Entity()
@ObjectType()
export class CharacterTrace {
  @PrimaryKeyUUID()
  @Field(() => ID)
  id!: string;

  @Property({ nullable: true })
  name!: string | null;

  @Enum({ type: EnumType, items: () => CharacterTraceType })
  @Field(() => CharacterTraceType)
  type!: CharacterTraceType;

  // Relations

  @ManyToOne(() => Character, { ref: true })
  character!: Ref<Character>;
}
