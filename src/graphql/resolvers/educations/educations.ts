import { EducationQueryInterface } from '../../../interfaces/queryInterfaces';

import { Queries } from '../../../dataServices/queries'

export const educations = async () => {
  const educations = await Queries.EducationsQueries.getAllEducations()
  return educations
}

export const educationById = async (root: any, args: { educationId: number }) => {
  const education = await Queries.EducationsQueries.getEducationById(args.educationId)
  return education
}

export const createEducation = async (root: any, payload: EducationQueryInterface) => {
  const education = await Queries.EducationsQueries.getEducationById(payload.profileId)
  if (!education) {
    await Queries.EducationsQueries.addEducation([
      {
        ...payload
      }
    ])

    const Education = {
      ...payload
    }
    const message = `User with profileId ${payload.profileId} created successfully`
    return { message, Education }
  } else {
    const message = `Education with profileId ${payload.profileId} already exists`
    return { message }
  }
}

export const deleteEducationById = async (root: any, args: { educationId: number }) => {
  const education = await Queries.EducationsQueries.getEducationById(args.educationId)
  if (!education) {
    const message = `Education not found`
    return { message }
  } else {
    const del = await Queries.EducationsQueries.deleteEducationById(args.educationId)
    const message = `User with educationId, ${del[0]['educationId']} deleted successfully`
    return { message }
  }
}

export const editEducationById = async (root: any, payload: EducationQueryInterface) => {

  const { profileId, educationId, ...rest } = payload

  const education = await Queries.EducationsQueries.getEducationById(educationId)

  if (!education) {

    const message = `Education not found`

    return { message }

  } else {

    const educationResult = await Queries.EducationsQueries.updateEducationById(educationId, rest)

    const updatedEducation = await Queries.EducationsQueries.getEducationById(educationResult[0]['educationId'])

    const message = `Education with profileId, ${educationResult[0]['profileId']} updated successfully`

    return { message, updatedEducation }
  }
}
