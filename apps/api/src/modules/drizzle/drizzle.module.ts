import { DynamicModule, Global, Module } from '@nestjs/common';
import { dbProvider } from './drizzle-db.provider';

@Global()
@Module({})
export class DrizzleModule {
  static forRoot(): DynamicModule {
    return {
      module: DrizzleModule,
      providers: [dbProvider],
      exports: [dbProvider],
    };
  }
}
