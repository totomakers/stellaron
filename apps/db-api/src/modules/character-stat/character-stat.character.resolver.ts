import { Parent, ResolveField, Resolver } from '@nestjs/graphql';
import { Character } from '../../db/entities/character.entity';
import { CharacterStat } from '../../db/entities/character-stat.entity';
import { CharacterStatService } from './character-stat.service';

@Resolver(() => Character)
export class CharacterStatCharacterResolver {
  constructor(private readonly characterStatService: CharacterStatService) {}

  @ResolveField(() => [CharacterStat])
  stats(@Parent() parent: Character) {
    return this.characterStatService.getAll({
      characterIds: [parent.id],
    });
  }
}
