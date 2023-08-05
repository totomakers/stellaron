import { Injectable } from '@nestjs/common';
import { Character } from '../../db/entities/character.entity';
import { InjectRepository } from '@mikro-orm/nestjs';
import { EntityRepository } from '@mikro-orm/postgresql';

@Injectable()
export class CharacterService {
  constructor(
    @InjectRepository(Character)
    private readonly characterRepo: EntityRepository<Character>,
  ) {}

  getAll() {
    return this.characterRepo.findAll();
  }
}
