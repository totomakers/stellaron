import { Field, ID, ObjectType } from '@nestjs/graphql';
import { InferModel } from 'drizzle-orm';
import { characters } from './characters.schema';

@ObjectType()
export class Character implements InferModel<typeof characters> {
  @Field(() => ID)
  id!: string;
}
