import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import resolvers from './graphql/resolvers';
import typeDefs from './graphql/typeDefs';

const PORT = process.env.PORT || 3000;
const app = express();

const server = new ApolloServer({
	typeDefs,
	resolvers,
	playground: true,
});

server.applyMiddleware({ app });

app.get('/', (req, res) => {
	res.send({ hello: 'there!' });
});

app.listen(PORT, () => `Listening at http://localhost:${PORT}`);
