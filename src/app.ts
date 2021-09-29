import express from 'express';
import { createConnection } from 'typeorm';
import config_db from './database/ormconfig';
import router from './routers';

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.json());

app.get('/', (req, res) => res.send('Hello World'));
app.use('/api', router);

async function main() {
  if (process.env.TS_NODE_DEV) {
    const connection = await createConnection(config_db);
    console.log('DB Has Connected', connection.name,);
  }

  app.listen(PORT, () => console.log('Server Listening on PORT', PORT));
}

main();
