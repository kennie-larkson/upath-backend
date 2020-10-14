import passport from 'passport';
import { Strategy } from 'passport-linkedin-oauth2';
import 'dotenv/config';
import { UsersQueries } from '../dataServices/users/queries';



const linkedinOptions = {
  clientID: process.env.linkedinClientID as string,
  clientSecret: process.env.linkedinClientSecret as string,
  callbackURL: '/auth/linkedin/redirect',
  scope: ['r_emailaddress', 'r_liteprofile']
}

const linkedinCallback = async (accessToken, refreshToken, profile, done) => {
  try {
    const currentUser = await UsersQueries.getUserByEmail(profile.emails[0].value)
    console.log(currentUser);
    if (currentUser) {
      const { lastLogin, email } = currentUser as any
      let newCurrentUser = await UsersQueries.updateUserLastLoginByEmail(email, lastLogin)
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
      done(null, persistedUser);
    }
  } catch (error) {
    throw new Error("Internal Server Error");
  }
}

export const LinkedinPassport = [
  passport.use(new Strategy(
    linkedinOptions,
    linkedinCallback
  ))
]

