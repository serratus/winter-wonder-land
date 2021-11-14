import { ApolloServer } from 'apollo-server-micro';
import { PageConfig } from 'next';
import Cors from 'micro-cors';

import { schema } from '../../src/schema';
import { context } from '../../src/context';

export const config: PageConfig = {
  api: {
    bodyParser: false,
  },
};

const cors = Cors();

const server = new ApolloServer({ schema, context });
const startServer = server.start();

export default cors(async (req, res) => {
  if (req.method === 'OPTIONS') {
    res.end();
    return false;
  }

  await startServer;
  await server.createHandler({ path: '/api/graphql' })(req, res);
});
