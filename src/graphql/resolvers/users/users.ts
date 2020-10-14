import { UserQueryInterface } from '../../../interfaces/queryInterfaces';

import { Queries } from '../../../dataServices/queries'

export const users = async () => {
  const users = await Queries.UsersQueries.getAllUsers();
  const newUsers = users.map(({ password, ...rest }) => rest)
  return newUsers;
}

export const usersRecords = async () => {
  const users = await Queries.UsersQueries.getAllUserRecords();
  const newUsers = users.map(({ password, ...rest }) => rest)
  return newUsers;
}

export const userById = async (root: any, args: { userId: number }) => {
  const user = await Queries.UsersQueries.getUserById(args.userId)
  return user;
}

export const userRecordById = async (root: any, args: { userId: number }) => {
  const [user] = await Queries.UsersQueries.getUserRecordById(args.userId)
  return user;
}

export const userByEmail = async (root: any, args: { email: string }) => {
  const user = await Queries.UsersQueries.getUserByEmail(args.email);
  return user;
}

export const userRecordByEmail = async (root: any, args: { email: string }) => {
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

  const user = await Queries.UsersQueries.getUserById(rest.userId)

  console.log('USER', user);


  if (!user) {

    const message = `User not found`

    return { message }

  } else {

    const [userResult]: any = await Queries.UsersQueries.updateUserById(rest)

    const updatedUser = await Queries.UsersQueries.getUserById(userResult['userId'])

    const message = `User with, ${userResult['email']} updated successfully`

    return { message, updatedUser }
  }

}

export const editUserByEmail = async (root: any, payload: UserQueryInterface) => {

  const { userId, provider, providerId, ...rest } = payload as any

  const user = await Queries.UsersQueries.getUserByEmail(rest.email)


  if (!user) {

    const message = `User not found`

    return { message }

  } else {

    const [updatedResult]: any = await Queries.UsersQueries.updateUserByEmail(rest)

    const updatedUser = await Queries.UsersQueries.getUserByEmail(updatedResult['email'])

    const message = `User with, ${updatedResult['email']} updated successfully`

    return { message, updatedUser }

  }

}

