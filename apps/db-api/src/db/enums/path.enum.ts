import { registerEnumType } from '@nestjs/graphql';

export enum Path {
  Destruction = 'destruction',
  Hunt = 'hunt',
  Erudition = 'erudition',
  Harmony = 'harmony',
  Nihility = 'nihility',
  Preservation = 'preservation',
  Abundance = 'abundance',
}

registerEnumType(Path, {
  name: 'Path',
});
