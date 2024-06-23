'use server'
import { signIn } from '@/auth';
import { AuthError } from 'next-auth';
import { redirect } from 'next/navigation'

export async function authenticate(prevState: any,formData: FormData,
) {

    const options = {
    email: formData.get('email'),
    password: formData.get('password'),
};

  try {
     await signIn('credentials', options);

  
  } catch (error) {
   if (error instanceof AuthError) {
            switch (error.type) {
                case "CredentialsSignin":
                     return { msg: "Invalid credentials" , status: "error"};
           case "CredentialsSignin":
                    throw error;
                default:
                    return { msg: "Email atau Password salah", status: "error" };
            }
          
        }

  }
    
    redirect('/dashboard'); // Redirect to dashboard page
  
}


 