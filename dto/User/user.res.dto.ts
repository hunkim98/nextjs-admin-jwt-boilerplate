import { UserRole } from "../entities/user";

export interface VerifiedUserResDto {
  accessToken: string;
  isEmailVerified: boolean;
  role: UserRole;
  name: string;
  email: string;
  telephone: string;
}
