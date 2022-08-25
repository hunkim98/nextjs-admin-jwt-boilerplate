import { User, Role } from "../entities/user";

export interface VerifiedUserResDto {
  accessToken: string;
  isEmailVerified: boolean;
  role: Role;
  name: string;
  email: string;
  telephone: string;
}

export interface GetAdminUsersResDto {
  users: Array<UserInfo>;
  pagesCount: number;
}

export type UserInfo = Pick<
  User,
  | "id"
  | "createdAt"
  | "updatedAt"
  | "deleted"
  | "name"
  | "telephone"
  | "nickname"
  | "email"
>;
