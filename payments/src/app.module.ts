import { Module } from '@nestjs/common';
import { HealthzController } from './healthz.controller';
import { PaymentsModule } from './payments/payments.module';

@Module({
  imports: [PaymentsModule],
  controllers: [HealthzController]
})
export class AppModule {}
