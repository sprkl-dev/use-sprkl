import { DATA_SOURCE } from '../db/db.provider';
import { DataSource } from 'typeorm';
import { Payment } from './payment.entity';

export const PAYMENTS_REPOSITORY = 'PAYMENTS_REPOSITORY';
export const paymentsProviders = [
  {
    provide: PAYMENTS_REPOSITORY,
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Payment),
    inject: [DATA_SOURCE],
  },
];
