import { DataSource, DataSourceOptions } from 'typeorm';

export const config: DataSourceOptions = {
  type: "sqlite",
  database: "./database/inventorySystemDB.sqlite",
  synchronize: false,
  logging: false,
  migrationsTableName: "migrations",
}

const source = new DataSource({
  ...config,
  entities: [
    "apps/api/src/app/modules/**/*.entity.ts"
  ],
  migrations: ["./migrations/*.ts"],
});

export default source;