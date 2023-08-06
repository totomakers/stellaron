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
import { CharacterStatType } from '../enums/character-stat-type.enum';
import { LightCone } from './light-cone.entity';
import { Field, Float, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
@Entity()
@Unique<LightConeStat>({
  properties: ['lightCone', 'type'],
})
export class LightConeStat {
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
  @ManyToOne(() => LightCone, { ref: true, onDelete: 'cascade' })
  lightCone!: Ref<LightCone>;
}
