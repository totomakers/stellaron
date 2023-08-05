import { Args, Query, Resolver } from '@nestjs/graphql';
import { Character } from '../../db/entities/character.entity';
import { CharacterService } from './character.service';
import { CharactersFiltersInput } from './inputs/characters-filters.input';

@Resolver(() => Character)
export class CharacterResolver {
  constructor(private readonly characterService: CharacterService) {}

  @Query(() => [Character])
  public characters(
    @Args('filters', { type: () => CharactersFiltersInput, nullable: true })
    filters?: CharactersFiltersInput,
  ) {
    return this.characterService.getAll(filters);
  }
}
