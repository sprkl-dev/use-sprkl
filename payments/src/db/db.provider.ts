import { DataSource } from 'typeorm';

export const DATA_SOURCE = 'DATA_SOURCE';
export const databaseProviders = [
  {
    provide: DATA_SOURCE,
    useFactory: async () => {
      const datasource = new DataSource({
        type: 'postgres',
        host: process.env.PG_HOST,
        port: (process.env.PG_PORT ?? 5432) as number,
        username: process.env.PG_USER,
        password: process.env.PG_PASSWORD,
        database: process.env.PG_DB ?? 'payments',
        entities: [__dirname + '/../**/*.entity{.ts,.js}'],
        synchronize: true,
      });
      return datasource.initialize();
    },
  },
];
