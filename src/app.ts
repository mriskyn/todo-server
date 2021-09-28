import express from 'express';
import { ConnectionOptions, createConnection } from 'typeorm';
import config_db from './database/ormconfig';

const PORT = process.env.PORT || 3000;

const app = express();

app.get('/', (req, res) => res.send('Hello World'));

async function main() {
  if (process.env.TS_NODE_DEV) {
    await createConnection(config_db);
    console.log('DB Has Connected');
  }
  
  app.listen(PORT, () => console.log('Server Listening on PORT', PORT));
}

main();
