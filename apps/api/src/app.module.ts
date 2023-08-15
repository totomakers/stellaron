import { Module } from '@nestjs/common';

import { DevtoolsModule } from '@nestjs/devtools-integration';
import { GraphQLModule } from './modules/graphql/graphql.module';
import { DrizzleModule } from './modules/drizzle/drizzle.module';
import { CharactersModule } from './modules/characters/characters.module';

@Module({
  imports: [
    DrizzleModule.forRoot(),
    GraphQLModule,
    DevtoolsModule.register({
      http: process.env.NODE_ENV !== 'production',
    }),

    CharactersModule,
  ],
})
export class AppModule {}
