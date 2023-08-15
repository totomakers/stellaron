import { Injectable } from '@nestjs/common';
import { NodePgDatabase } from 'drizzle-orm/node-postgres';
import { InjectDrizzle } from '../drizzle/drizzle-db.provider';
import { characters } from './characters.schema';

@Injectable()
export class CharactersService {
  constructor(@InjectDrizzle() private readonly db: NodePgDatabase) {}

  findAll() {
    const qb = this.db.select().from(characters);
    return qb.execute();
  }
}
