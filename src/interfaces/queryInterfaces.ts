export interface UserQueryInterface {
  userId?: number;
  provider?: string;
  providerId?: string;
  profileImage?: string;
  email?: string;
  password?: string;
  username?: string;
}

export interface ProfileQueryInterface {
  profileId: number;
  userId: number;
  firstname?: string;
  lastname?: string;
  aboutMe?: string;
  gender?: string;
  location?: string;
  birthDate?: Date;
  socialProfile?: string;
  preferredLanguage?: string;
}