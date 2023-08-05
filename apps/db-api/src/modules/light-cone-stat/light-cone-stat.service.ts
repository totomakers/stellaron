import { Injectable } from '@nestjs/common';
import { EntityManager } from '@mikro-orm/postgresql';
import { LightConeStatsFiltersInput } from './inputs/light-cone-stats-filters.input';
import { LightConeStat } from '../../db/entities/light-cone-stat.entity';

@Injectable()
export class LightConeStatService {
  constructor(private readonly em: EntityManager) {}

  getAll(filters?: LightConeStatsFiltersInput) {
    const qb = this.em.createQueryBuilder(LightConeStat, 'lightConeStat');
    const knex = qb.getKnex();

    if (filters?.lightConeIds && filters.lightConeIds.length > 0) {
      knex.whereIn('light_cone_id', filters?.lightConeIds);
    }

    if (filters?.type && filters.type.length > 0) {
      knex.whereIn('type', filters?.type);
    }

    return this.em.getConnection().execute(knex);
  }
}
