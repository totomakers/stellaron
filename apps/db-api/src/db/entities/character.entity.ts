import {
  Collection,
  Entity,
  Enum,
  OneToMany,
  PrimaryKey,
  Property,
} from '@mikro-orm/core';
import { CharacterAbility } from './character-ability.entity';
import { CharacterStat } from './character-stat.entity';
import { Path } from '../enums/path.enum';
import { CombatType } from '../enums/combat-type.enum';
import { CharacterRarity } from '../enums/character-rarity.enum';
import { CharacterTrace } from './character-trace.entity';

@Entity()
export class Character {
  @PrimaryKey({
    defaultRaw: 'gen_random_uuid()',
  })
  id!: string;

  @Property()
  name!: string;

  @Property({ unique: true })
  slug!: string;

  @OneToMany(() => CharacterAbility, (entity) => entity.character)
  abilities = new Collection<CharacterAbility>(this);

  @OneToMany(() => CharacterStat, (entity) => entity.character)
  baseStats = new Collection<CharacterStat>(this);

  @OneToMany(() => CharacterTrace, (entity) => entity.character)
  traces = new Collection<CharacterTrace>(this);

  @Enum(() => CombatType)
  combatType!: CombatType;

  @Enum(() => Path)
  path!: Path;

  @Property({ columnType: 'smallint' })
  rarity!: CharacterRarity;
}
