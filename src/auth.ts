
import NextAuth from "next-auth"
import Google from "next-auth/providers/google"
 import Credentials from "next-auth/providers/credentials"
import { getUserFromDb } from "./lib/getUserFromDb";

const bcrypt = require('bcryptjs');

export async function saltAndHashPassword(password:any) {
  const saltRounds = 10; // Number of salt rounds to use
  const salt = await bcrypt.genSalt(saltRounds);
  const hashedPassword = await bcrypt.hash(password, salt);
  return hashedPassword;
}

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [Google, Credentials({
      // You can specify which fields should be submitted, by adding keys to the `credentials` object.
      // e.g. domain, username, password, 2FA token, etc.
      credentials: {
        email: {},
        password: {},
      },
    async authorize(credentials) {
  try {
        // logic to salt and hash password
        const pwHash = saltAndHashPassword(credentials.password)
 
        // logic to verify if user exists
       const user = await getUserFromDb(credentials.email, pwHash)
 
        if (!user) {
          // No user found, so this is their first attempt to login
          // meaning this is also the place you could do registration
          throw new Error("User not found.")
        }
 
        // return user object with the their profile data
        return user as any
      } catch (error) {
          console.error("Error in authorize function:", error);
          return null;
        }
    }
})],
      pages: {
    signIn: "/",
  },
    
})


