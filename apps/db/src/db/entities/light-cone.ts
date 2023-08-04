import {
  Collection,
  Entity,
  Enum,
  OneToMany,
  PrimaryKey,
  Property,
} from '@mikro-orm/core';

import { Path } from '../enums/path';
import { CombatType } from '../enums/combat-type';
import { LightConeStat } from './light-cone-stat';
import { LightConeRarity } from '../enums/light-cone-rarity';

@Entity()
export class LightCone {
  @PrimaryKey({
    defaultRaw: 'gen_random_uuid()',
  })
  id!: string;

  @Property()
  name!: string;

  @Property({ unique: true })
  slug!: string;

  @Enum(() => Path)
  path!: Path;

  @OneToMany(() => LightConeStat, (entity) => entity.lightCone)
  baseStats = new Collection<LightConeStat>(this);

  @Enum(() => CombatType)
  combatType!: CombatType;

  @Property({ columnType: 'smallint' })
  rarity!: LightConeRarity;
}
