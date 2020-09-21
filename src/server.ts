import express from 'express';
import logger from 'morgan';
import helmet from 'helmet';
import cors from 'cors';
import { ApolloServer } from 'apollo-server-express';
import passport from 'passport';
import 'dotenv/config';
import 'knex'

import { resolvers } from './graphql/resolvers';
import { typeDefs } from './graphql/schema';
import { GooglePassport } from './auth/googlePassport';
import { LinkedinPassport } from './auth/linkedinPassport';
import { tokenGenerator, verifyToken } from './auth/authHandlers';



GooglePassport
LinkedinPassport

const app = express();

app.use(helmet());
app.use(logger('dev'));
app.use(cors());
app.use(express.urlencoded({ extended: true }));

app.use(passport.initialize());

app.get('/auth/google', passport.authenticate('google', {
  session: false,
  scope: ['profile', 'email']
}));

app.get('/auth/google/redirect', passport.authenticate('google', {
  session: false,
  failureRedirect: '/',
}), tokenGenerator);

app.get('/auth/linkedin',passport.authenticate('linkedin',{
  session: false,
  scope: ['r_emailaddress', 'r_liteprofile' ]
}
));

app.get('/auth/linkedin/redirect', passport.authenticate('linkedin', {
  session: false,
  failureRedirect: '/',
}), tokenGenerator);



const apolloServer = new ApolloServer({
  typeDefs,

  resolvers,

  context: verifyToken,

  debug: false

});

apolloServer.applyMiddleware({ app, path: "/graphql" });

const port = process.env.PORT || 5000;

app.listen(port, () =>
  console.log(`\nGraphQL Server running on ---> http://localhost:${port}/graphql\n`)
)
