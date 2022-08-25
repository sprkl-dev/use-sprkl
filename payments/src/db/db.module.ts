import { Module } from '@nestjs/common';
import { databaseProviders } from './db.provider';

@Module({
  providers: databaseProviders,
  exports: databaseProviders,
})
export class DatabaseModule {}
