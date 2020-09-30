import passport from 'passport';
import GoogleStrategy from 'passport-google-oauth20';
import 'dotenv/config';

import { UsersQueries } from '../endpoints/users/queries';

export const GooglePassport = [
  passport.use(new GoogleStrategy.Strategy({
    callbackURL: '/auth/google/redirect',
    clientID: process.env.googleClientID,
    clientSecret: process.env.googleClientSecret
  }, async (accessToken, refreshToken, profile, done) => {
    try {
      const currentUser = await UsersQueries.getUserByEmail(profile.emails[0].value)
      
      if (currentUser) {
        const { lastLogin, email } = currentUser as any
        let newCurrentUser = await UsersQueries.updateUserLastLoginByEmail(email, lastLogin)
        console.log('User already exists:', newCurrentUser);
        done(null, newCurrentUser);
      } else {
        let date = new Date();
        const user = {
          username: profile.displayName,
          provider: profile.provider,
          providerId: profile.id,
          profileImage: profile.photos[0].value,
          email: profile.emails[0].value,
          lastLogin: date,
        };
        const persistedUser = await UsersQueries.addUser(user);
        console.log('New user created!');
        done(null, persistedUser);
      }
    } catch (error) {
      console.log(error)
      throw new Error("Internal Server Error");
    }
  })
  )
]

