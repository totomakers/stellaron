import { Module } from '@nestjs/common';
import { CharacterResolver } from './characters.resolver';
import { CharactersService } from './characters.service';

@Module({
  providers: [CharacterResolver, CharactersService],
  exports: [CharactersService],
})
export class CharactersModule {}
