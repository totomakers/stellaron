import { Query, Resolver } from '@nestjs/graphql';
import { Character } from './character.gql';
import { CharactersService } from './characters.service';

@Resolver(() => Character)
export class CharacterResolver {
  constructor(private readonly charactersService: CharactersService) {}

  @Query(() => [Character])
  characters() {
    return this.charactersService.findAll();
  }
}
