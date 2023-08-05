import {
  Collection,
  Entity,
  Enum,
  EnumType,
  OneToMany,
  PrimaryKey,
  Property,
} from '@mikro-orm/core';

import { Path } from '../enums/path.enum';
import { CombatType } from '../enums/combat-type.enum';
import { LightConeStat } from './light-cone-stat.entity';
import { LightConeRarity } from '../types/light-cone-rarity.type';
import { Field, ID, Int, ObjectType } from '@nestjs/graphql';

@Entity()
@ObjectType()
export class LightCone {
  @PrimaryKey()
  @Field(() => ID)
  id!: string;

  @Property()
  @Field()
  name!: string;

  @Enum({ type: EnumType, items: () => Path })
  @Field(() => Path)
  path!: Path;

  @Enum({ type: EnumType, items: () => CombatType })
  @Field(() => CombatType)
  combatType!: CombatType;

  @Property({ type: 'int' })
  @Field(() => Int)
  rarity!: LightConeRarity;

  @OneToMany(() => LightConeStat, (entity) => entity.lightCone)
  baseStats = new Collection<LightConeStat>(this);
}
