import { Args, Field, Parent, Query, Resolver } from '@nestjs/graphql';
import { CharacterTrace } from '../../db/entities/character-trace.entity';
import { CharacterTraceService } from './character-trace.service';
import { CharacterTracesFiltersInput } from './inputs/character-traces-filters.input';

@Resolver(() => CharacterTrace)
export class CharacterTraceResolver {
  constructor(private readonly characterTraceService: CharacterTraceService) {}

  @Query(() => [CharacterTrace])
  public characterTraces(
    @Args('filters', {
      type: () => CharacterTracesFiltersInput,
      nullable: true,
    })
    filters?: CharacterTracesFiltersInput,
  ) {
    return this.characterTraceService.getAll(filters);
  }

  @Field(() => String)
  public name(@Parent() parent: CharacterTrace) {
    return parent.id;
  }
}
