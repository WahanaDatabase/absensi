import { AuthError } from "next-auth";

export class InvalidEmailError extends AuthError {
  static type = "InvalidEmail"
}