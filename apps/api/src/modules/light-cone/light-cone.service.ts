import { Injectable } from '@nestjs/common';
import { LightConesFiltersInput } from './inputs/light-cones-filters.input';
import { LightCone } from '../../db/entities/light-cone.entity';
import { EntityManager } from '@mikro-orm/postgresql';

@Injectable()
export class LightConeService {
  constructor(private readonly em: EntityManager) {}

  getAll(filters?: LightConesFiltersInput) {
    const qb = this.em.createQueryBuilder(LightCone, 'lightCone');
    const knex = qb.getKnex();

    if (filters?.rarities && filters.rarities.length > 0) {
      knex.whereIn('rarity', filters?.rarities);
    }

    if (filters?.paths && filters.paths.length > 0) {
      knex.whereIn('path', filters?.paths);
    }

    if (filters?.query) {
      knex.whereRaw('LEVENSHTEIN(name, ?) <= 4', [filters.query]);
    }

    return this.em.getConnection().execute(knex);
  }
}
