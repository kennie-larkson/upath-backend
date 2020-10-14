import { ProfileQueryInterface } from '../../../interfaces/queryInterfaces';

import { Queries } from '../../../dataServices/queries'

export const profiles = async () => {
  const profiles = await Queries.ProfilesQueries.getAllProfiles()
  return profiles
}

export const profileById = async (root: any, args: { profileId: number }) => {
  const profile = await Queries.ProfilesQueries.getProfileById(args.profileId)
  return profile
}

export const createProfile = async (root: any, payload: ProfileQueryInterface) => {
  const profile = await Queries.ProfilesQueries.getProfileById(payload.userId)
  if (!profile) {
    await Queries.ProfilesQueries.addProfile([
      {
        ...payload
      }
    ])

    const Profile = {
      ...payload
    }
    const message = `User with ${payload.userId} created successfully`
    return { message, Profile }
  } else {
    const message = `Profile with userId already exists`
    return { message }
  }
}

export const deleteProfileById = async (root: any, args: { profileId: number }) => {
  const profile = await Queries.ProfilesQueries.getProfileById(args.profileId)
  if (!profile) {
    const message = `Profile not found`
    return { message }
  } else {
    const del = await Queries.ProfilesQueries.deleteProfileById(args.profileId)
    const message = `User with, ${del[0]['profileId']} deleted successfully`
    return { message }
  }
}

export const editProfileById = async (root: any, payload: ProfileQueryInterface) => {

  const { profileId, userId, ...rest } = payload

  const profile = await Queries.ProfilesQueries.getProfileById(profileId)

  if (!profile) {

    const message = `Profile not found`

    return { message }

  } else {

    const profileResult = await Queries.ProfilesQueries.updateProfileById(profileId, rest)

    const updatedProfile = await Queries.ProfilesQueries.getProfileById(profileResult[0]['profileId'])

    const message = `Profile with with userId, ${profileResult[0]['userId']} updated successfully`

    return { message, updatedProfile }
  }
}
