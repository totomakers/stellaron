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
import { CharacterRarity } from '../types/character-rarity.type';
import { CharacterTrace } from './character-trace.entity';
import { Field, ID, Int, ObjectType } from '@nestjs/graphql';

@Entity()
@ObjectType()
export class Character {
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

  @Enum(() => CombatType)
  @Field(() => CombatType)
  combatType!: CombatType;

  @Enum(() => Path)
  @Field(() => Path)
  path!: Path;

  @Property({ columnType: 'smallint' })
  @Field(() => Int)
  rarity!: CharacterRarity;

  // Relations

  @OneToMany(() => CharacterAbility, (entity) => entity.character)
  abilities = new Collection<CharacterAbility>(this);

  @OneToMany(() => CharacterStat, (entity) => entity.character)
  baseStats = new Collection<CharacterStat>(this);

  @OneToMany(() => CharacterTrace, (entity) => entity.character)
  traces = new Collection<CharacterTrace>(this);
}
