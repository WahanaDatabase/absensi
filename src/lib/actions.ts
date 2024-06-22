'use server'
import { signIn } from '@/auth';
import { AuthError } from 'next-auth';

export async function authenticate(formData: FormData,
) {
  try {
    const options = {
    email: formData.get('email'),
    password: formData.get('password'),
redirectTo: "/dashboard"
};
    console.log(formData)
    await signIn("credentials",options);
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case 'CredentialsSignin':
          return 'Invalid credentials.';
        default:
          return 'Something went wrong.';
      }
    }
    throw error;
  }
}
 