import { Parent, ResolveField, Resolver } from '@nestjs/graphql';
import { Character } from '../../db/entities/character.entity';
import { CharacterAbility } from '../../db/entities/character-ability.entity';

@Resolver(() => Character)
export class CharacterAbilityCharacterResolver {
  @ResolveField(() => [CharacterAbility])
  abilities(@Parent() parent: Character) {
    return parent.abilities.loadItems();
  }
}
