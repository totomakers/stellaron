import {
  Collection,
  Entity,
  Enum,
  OneToMany,
  PrimaryKey,
  Property,
} from '@mikro-orm/core';
import { CharacterAbility } from './character-ability';
import { CharacterBaseStat } from './character-stat';
import { Path } from '../enums/path';
import { CombatType } from '../enums/combat-type';
import { CharacterRarity } from '../enums/character-rarity';

@Entity()
export class Character {
  @PrimaryKey({
    defaultRaw: 'gen_random_uuid()',
  })
  id!: string;

  @Property()
  name!: string;

  @OneToMany(() => CharacterAbility, (entity) => entity.character)
  abilities = new Collection<CharacterAbility>(this);

  @OneToMany(() => CharacterBaseStat, (entity) => entity.character)
  baseStats = new Collection<CharacterBaseStat>(this);

  @Enum(() => CombatType)
  combatType!: CombatType;

  @Enum(() => Path)
  path!: Path;

  @Property({ columnType: 'smallint' })
  rarity!: CharacterRarity;
}
