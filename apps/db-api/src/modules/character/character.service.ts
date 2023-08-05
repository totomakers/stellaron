import { Injectable } from '@nestjs/common';
import { Character } from '../../db/entities/character.entity';
import { EntityManager } from '@mikro-orm/postgresql';
import { CharactersFiltersInput } from './inputs/characters-filters.input';

@Injectable()
export class CharacterService {
  constructor(private readonly em: EntityManager) {}

  async getAll(filters?: CharactersFiltersInput) {
    const qb = this.em.createQueryBuilder(Character, 'character');
    const knex = qb.getKnex();

    if (filters?.combatTypes && filters.combatTypes.length > 0) {
      knex.whereIn('combat_type', filters?.combatTypes);
    }

    if (filters?.paths && filters.paths.length > 0) {
      knex.whereIn('path', filters?.paths);
    }

    if (filters?.rarities && filters.rarities.length > 0) {
      knex.whereIn('rarity', filters.rarities);
    }

    if (filters?.query) {
      knex.whereRaw('LEVENSHTEIN(name, ?) <= 4', [filters.query]);
    }

    const results = await this.em.getConnection().execute(knex);

    return results.map((character) => this.em.map(Character, character));
  }
}
