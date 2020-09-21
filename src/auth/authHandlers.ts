import * as jwt from 'jsonwebtoken';

import { AuthenticationError } from 'apollo-server-express';


const generateJWT = (user: object, jwtSecret: string, expiresIn: object): string => {

  return jwt.sign(user, jwtSecret, expiresIn)

}


export const tokenGenerator = (req, res) => {

  const { user } = req;

  const { password, ...rest } = user[0] as any

  let expiresIn = 86400;

  const jwtToken = generateJWT(rest, process.env.jwtSecret, { expiresIn });

  res.status(200).json({ auth: true, token: jwtToken, user: rest.email });

};


export const verifyToken = async ({ req, ...rest }) => {

  const { authorization } = req.headers;

  const token = /Bearer\s(.+)/.exec(authorization)[1];

  jwt.verify(token, process.env.jwtSecret, (err, decodedToken) => {

    if (err) {

      throw new AuthenticationError('Must authenticate')

    } else {

      console.log('decodedToken', decodedToken);

      return { authorized: true, user: decodedToken, ...rest }

    }

  })

}

