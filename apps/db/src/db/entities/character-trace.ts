import { Entity, Enum, ManyToOne, Property, Ref } from '@mikro-orm/core';
import { PrimaryKeyUUID } from '../decorators/PrimaryKeyUUID';
import { Character } from './character';
import { CharacterTraceType } from '../enums/character-trace-type';

@Entity()
export class CharacterTrace {
  @PrimaryKeyUUID()
  id!: string;

  @Property({ nullable: true })
  name!: string | null;

  @Enum(() => CharacterTraceType)
  type!: CharacterTraceType;

  @ManyToOne(() => Character, { ref: true })
  character!: Ref<Character>;
}
