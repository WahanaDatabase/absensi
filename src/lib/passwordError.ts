import { AuthError } from "next-auth";

export class InvalidPasswordError extends AuthError {
  static type = "InvalidPassword"
}