import {
  Collection,
  Entity,
  Enum,
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
  @PrimaryKey({
    defaultRaw: 'gen_random_uuid()',
  })
  @Field(() => ID)
  id!: string;

  @Property()
  @Field()
  name!: string;

  @Property({ unique: true })
  @Field()
  slug!: string;

  @Enum(() => Path)
  @Field(() => Path)
  path!: Path;

  @Enum(() => CombatType)
  @Field(() => CombatType)
  combatType!: CombatType;

  @Property({ columnType: 'smallint' })
  @Field(() => Int)
  rarity!: LightConeRarity;

  @OneToMany(() => LightConeStat, (entity) => entity.lightCone)
  baseStats = new Collection<LightConeStat>(this);
}
