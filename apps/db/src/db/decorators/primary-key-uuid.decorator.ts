import { PrimaryKey } from '@mikro-orm/core';

export const PrimaryKeyUUID = () =>
  PrimaryKey({
    defaultRaw: 'gen_random_uuid()',
  });
