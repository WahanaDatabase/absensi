'use server'
import { signIn } from '@/auth';
import { AuthError } from 'next-auth';
import { redirect } from 'next/navigation'
import { InvalidEmailError} from './emailError';
import { InvalidPasswordError } from './passwordError';

export async function authenticate(prevState: any,formData: FormData,
) {

    const options = {
    email: formData.get('email'),
    password: formData.get('password'),
    redirect:false
};

  try {
     await signIn('credentials', options);

  
  } catch (error) {
 if(error instanceof InvalidPasswordError){
  console.log("hi",error.name)
 switch (error.name) {
 case "InvalidPasswordError":
                 return { msg: "Invalid Password" , status: "error"};

}
 }
   else if (error instanceof InvalidEmailError) {
    
            switch (error.name) {
                case "CredentialsSignin":
                     return { msg: "Invalid credentials" , status: "error"};
           case "CredentialsSignin":
                    throw error;
              case "InvalidEmailError":
                 return { msg: "Invalid Email" , status: "error"};
  
                default:
                    return { msg: "Email atau Password salah", status: "error" };
            }
         
        }

  }
    
    redirect('/dashboard'); // Redirect to dashboard page
  
}


 