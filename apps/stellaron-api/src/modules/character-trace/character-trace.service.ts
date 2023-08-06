import { EntityManager } from '@mikro-orm/postgresql';
import { Injectable } from '@nestjs/common';
import { CharacterTracesFiltersInput } from './inputs/character-traces-filters.input';
import { CharacterTrace } from '../../db/entities/character-trace.entity';

@Injectable()
export class CharacterTraceService {
  constructor(private readonly em: EntityManager) {}

  getAll(filters?: CharacterTracesFiltersInput) {
    const qb = this.em.createQueryBuilder(CharacterTrace, 'characterTrace');
    const knex = qb.getKnex();

    if (filters?.characterIds && filters.characterIds.length > 0) {
      knex.whereIn('character_id', filters?.characterIds);
    }

    if (filters?.type && filters.type.length > 0) {
      knex.whereIn('type', filters?.type);
    }

    if (filters?.query) {
      knex.whereRaw('LEVENSHTEIN(name, ?) <= 4', [filters.query]);
    }

    return this.em.getConnection().execute(knex);
  }
}
