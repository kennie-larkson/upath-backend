import { UserQueryInterface } from '../../../interfaces/queryInterfaces';

import { Queries } from '../../../endpoints/queries'

export const users = async () => {
  const users = await Queries.UsersQueries.getAllUserRecords();
  return users;
}

export const userById = async (root: any, args: { userId: number }) => {
  const [user] = await Queries.UsersQueries.getUserRecordById(args.userId)
  return user;
}
export const userByEmail = async (root: any, args: { email: string }) => {
  const user = await Queries.UsersQueries.getUserRecordByEmail(args.email);
  return user;
}

export const createUser = async (root: any, payload: UserQueryInterface) => {
  const user = await Queries.UsersQueries.getUserRecordByEmail(payload.email)
  if (!user) {
    await Queries.UsersQueries.addUser([
      {
        ...payload
      }
    ]);

    const User = {
      ...payload
    };

    const message = `User with ${payload.email} created successfully`
    return { message, User }
  } else {
    const message = `Email already exists`
    return { message }
  }

}

/* We should not be deleting users */

/*

export const deleteUserById = async (root: any, args: { userId: number }) => {

  const user = await Queries.UsersQueries.getUserRecordById(args.userId)
  if (!user) {
    const message = `User not found`
    return { message }
  } else {
    const del = await Queries.UsersQueries.deleteUserById(args.userId)
    const message = `User with, ${del[0]['email']} deleted successfully`
    return { message }
  }

}

export const deleteUserByEmail = async (root: any, args: { email: string }) => {
  const user = await Queries.UsersQueries.getUserRecordByEmail(args.email)
  if (!user) {
    const message = `User not found`
    return { message }
  } else {
    const del = await Queries.UsersQueries.deleteUserByEmail(args.email)
    const message = `User with, ${del[0]['email']} deleted successfully`
    return { message }
  }
}

*/

export const editUserById = async (root: any, payload: UserQueryInterface) => {

  const { provider, email, providerId, ...rest } = payload

  const user = await Queries.UsersQueries.getUserRecordById(rest.userId)

  if (!user) {

    const message = `User not found`

    return { message }

  } else {

    const userResult: any = await Queries.UsersQueries.updateUserById(rest)

    const [updatedUser] = await Queries.UsersQueries.getUserRecordById(userResult[0]['userId'])

    const message = `User with, ${userResult[0]['email']} updated successfully`

    return { message, updatedUser }
  }

}

export const editUserByEmail = async (root: any, payload: UserQueryInterface) => {

  const { userId, provider, providerId, ...rest } = payload as any

  const user = await Queries.UsersQueries.getUserRecordByEmail(rest.email)

  if (!user) {

    const message = `User not found`

    return { message }

  } else {

    const updatedResult: any = await Queries.UsersQueries.updateUserByEmail(rest)

    const updatedUser = await Queries.UsersQueries.getUserRecordByEmail(updatedResult[0]['email'])

    const message = `User with, ${updatedResult[0]['email']} updated successfully`

    return { message, updatedUser }

  }

}

