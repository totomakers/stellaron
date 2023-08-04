import { Entity, Enum, ManyToOne, Property, Ref } from '@mikro-orm/core';
import { PrimaryKeyUUID } from '../decorators/PrimaryKeyUUID';
import { CharacterStatType } from '../enums/character-stat-type';
import { LightCone } from './light-cone';

@Entity()
export class LightConeStat {
  @PrimaryKeyUUID()
  id!: string;

  @Enum(() => CharacterStatType)
  stat!: CharacterStatType;

  @Property({
    columnType: 'float',
  })
  value!: number;

  @ManyToOne(() => LightCone, { ref: true })
  lightCone!: Ref<LightCone>;
}
