import { Query, ResolveField, Resolver } from '@nestjs/graphql';
import { Character } from '../../db/entities/character.entity';
import { CharacterTrace } from '../../db/entities/character-trace.entity';
import { CharacterAbility } from '../../db/entities/character-ability.entity';
import { CharacterStat } from '../../db/entities/character-stat.entity';
import { CharacterService } from './character.service';

@Resolver(() => Character)
export class CharacterResolver {
  constructor(private readonly characterService: CharacterService) {}

  @Query(() => [Character])
  public characters() {
    return this.characterService.getAll();
  }

  @ResolveField(() => [CharacterTrace])
  public traces() {
    return [];
  }

  @ResolveField(() => [CharacterAbility])
  public abilities() {
    return [];
  }

  @ResolveField(() => [CharacterStat])
  public stats() {
    return [];
  }
}
