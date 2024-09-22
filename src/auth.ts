
import NextAuth from "next-auth"
 import Credentials from "next-auth/providers/credentials"
import { getUserFromDbByEmail } from "./lib/getUserFromDbByEmail";

const bcrypt = require('bcryptjs');

export async function saltAndHashPassword(password:any) {
  const saltRounds = 10; // Number of salt rounds to use
  const salt = await bcrypt.genSalt(saltRounds);
  const hashedPassword = await bcrypt.hash(password, salt);
  return hashedPassword;
}

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [ Credentials({
      // You can specify which fields should be submitted, by adding keys to the `credentials` object.
      // e.g. domain, username, password, 2FA token, etc.
      credentials: {
        email: {},
        password: {},
      },
    async authorize(credentials) {
  try {
        // logic to salt and hash password
        // const pwHash = await saltAndHashPassword(credentials.password)
     
        // logic to verify if user exists
       const user = await getUserFromDbByEmail(credentials.email)
        if (!user) {
          // No user found, so this is their first attempt to login
          // meaning this is also the place you could do registration
          throw new Error("User not found.")
        }
      const isPasswordValid = await bcrypt.compare(credentials.password, user.password);
          if (!isPasswordValid) {
            throw new Error("Invalid password.");
          }
 
        // return user object with the their profile data
        return user as any
      } catch (error) {
          console.error("Error in authorize function:", error);
           throw new Error("CredentialsSignin");
        }
    }
})],
      pages: {
    signIn: "/",
  },
    callbacks: {
    async signIn({ user }) {
      // If user is returned, signIn was successful
      if (user) {
        return true; // Return true to indicate sign-in success
      }

      // If no user is returned, signIn failed
      return false; // Return false to indicate sign-in failure
    },
  },
})


