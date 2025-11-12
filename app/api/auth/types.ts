export interface User {
  id: string;
  firstName: string;
  lastName: string;
  organization?: string;
  email: string;
  isEmailVerified: boolean;
  authProvider?: "email" | "google";
  createdAt: string;
  updatedAt: string;
}

export type SignupPayload = {
  firstName: string;
  lastName: string;
  organization?: string;
  email: string;
  password: string;
};

export type LoginPayload = {
  email: string;
  password: string;
};

export type ForgotPasswordPayload = {
  email: string;
};

export type ResetPasswordPayload = {
  token: string;
  newPassword: string;
};

export type UpdateUserProfilePayload = {
  firstName?: string;
  lastName?: string;
  organization?: string;
};
