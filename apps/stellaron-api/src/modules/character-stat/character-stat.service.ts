import { Injectable } from '@nestjs/common';
import { CharacterStatsFiltersInput } from './inputs/character-stats-filters.input';
import { CharacterStat } from '../../db/entities/character-stat.entity';
import { EntityManager } from '@mikro-orm/postgresql';

@Injectable()
export class CharacterStatService {
  constructor(private readonly em: EntityManager) {}

  getAll(filters?: CharacterStatsFiltersInput) {
    const qb = this.em.createQueryBuilder(CharacterStat, 'characterStat');
    const knex = qb.getKnex();

    if (filters?.characterIds && filters.characterIds.length > 0) {
      knex.whereIn('character_id', filters?.characterIds);
    }

    if (filters?.type && filters.type.length > 0) {
      knex.whereIn('type', filters?.type);
    }

    return this.em.getConnection().execute(knex);
  }
}
