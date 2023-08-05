import { Module } from '@nestjs/common';
import { CharacterTraceResolver } from './character-trace.resolver';
import { CharacterTraceService } from './character-trace.service';
import { CharacterTraceCharacterResolver } from './character-trace.character.resolver';

@Module({
  providers: [
    CharacterTraceResolver,
    CharacterTraceCharacterResolver,
    CharacterTraceService,
  ],
})
export class CharacterTraceModule {}
