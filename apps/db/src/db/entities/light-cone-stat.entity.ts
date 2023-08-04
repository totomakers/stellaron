import { Entity, Enum, ManyToOne, Property, Ref } from '@mikro-orm/core';
import { PrimaryKeyUUID } from '../decorators/primary-key-uuid.decorator';
import { CharacterStatType } from '../enums/character-stat-type.enum';
import { LightCone } from './light-cone.entity';

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
