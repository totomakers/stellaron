import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DevtoolsModule } from '@nestjs/devtools-integration';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { GraphQLModule } from './modules/graphql/graphql.module';
import { CharacterModule } from './modules/character/character.module';
import { LightConeModule } from './modules/light-cone/light-cone.module';

@Module({
  imports: [
    MikroOrmModule.forRoot(),
    GraphQLModule,
    DevtoolsModule.register({
      http: process.env.NODE_ENV !== 'production',
    }),
    // ------------
    CharacterModule,
    LightConeModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
