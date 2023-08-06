import { Parent, ResolveField, Resolver } from '@nestjs/graphql';
import { Character } from '../../db/entities/character.entity';
import { CharacterTrace } from '../../db/entities/character-trace.entity';
import { CharacterTraceService } from './character-trace.service';

@Resolver(() => Character)
export class CharacterTraceCharacterResolver {
  constructor(private readonly characterTraceService: CharacterTraceService) {}

  @ResolveField(() => [CharacterTrace])
  traces(@Parent() parent: Character) {
    return this.characterTraceService.getAll({
      characterIds: [parent.id],
    });
  }
}
