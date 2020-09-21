import { CreateUserResponse, User, UpdateUserResponse, /* DeleteUserResponse */ } from './schemas/users/users';
import { CreateProfileResponse, Profile, UpdateProfileResponse, DeleteProfileResponse } from './schemas/profiles/profiles';
import { mutations } from './schemas/mutations';
import { Query } from './schemas/query';

export const typeDefs = [
  Query,
  mutations,
  User,
  CreateUserResponse,
  UpdateUserResponse,
  // DeleteUserResponse,
  Profile,
  CreateProfileResponse,
  UpdateProfileResponse,
  DeleteProfileResponse

]