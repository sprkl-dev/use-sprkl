import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/db/db.module';
import { PaymentsController } from './payments.controller';
import { paymentsProviders } from './payments.providers';

@Module({
  imports: [DatabaseModule],
  providers: paymentsProviders,
  controllers: [PaymentsController],
})
export class PaymentsModule {}
