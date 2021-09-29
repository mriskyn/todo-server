import { ConnectionOptions } from 'typeorm';
import * as dotenv from 'dotenv';

dotenv.config();

let config: ConnectionOptions;

if (process.env.TS_NODE_DEV) {
  config = {
    type: 'postgres',
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT),
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    entities: [__dirname.replace('database', '') + '/entity/*{.ts,.js}'],
    synchronize: true,
  };
} else {
  config = {
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: '',
    password: '',
    database: '',
    entities: ['src/entity/*{.ts,.js}'],
    synchronize: false,
  };
}
export default config;
