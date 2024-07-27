'use server'
import { signIn } from '@/auth';
import { AuthError } from 'next-auth';
import { redirect } from 'next/navigation'
import { createLocationToDb } from './createLocationToDb';
import { createUserToDb } from './createUserToDb';
export async function createUser(formData:FormData) {


  const rawFormData = {
    name: formData.get('name'),
    group: formData.get('group'),
    email: formData.get('email'),
    no:formData.get('no'),
    password:formData.get('password')
  };

  // Ensure all form data fields are not null
  if (!rawFormData.name || !rawFormData.group || !rawFormData.email || !rawFormData.no|| !rawFormData.password ) {
    throw new Error('All form fields must be filled out.');
  }

  try {
    await createUserToDb(rawFormData.name.toString(), rawFormData.group.toString(), rawFormData.email.toString(), rawFormData.no.toString(),rawFormData.password.toString())
    // Perform any necessary post-request actions here
    // For example: mutate data, revalidate cache, etc.
    
  } catch (error) {
    console.error('Error creating location:', error);
    throw new Error('Failed to create location.');
  }
  redirect('/dashboard/data-karyawan');
}

export async function createLocation(formData:FormData) {


  const rawFormData = {
    name: formData.get('name'),
    lat: formData.get('lat'),
    long: formData.get('long'),
  };

  // Ensure all form data fields are not null
  if (!rawFormData.name || !rawFormData.lat || !rawFormData.long ) {
    throw new Error('All form fields must be filled out.');
  }

  try {
    await createLocationToDb(rawFormData.name.toString(), Number(rawFormData.lat), Number(rawFormData.long), rawFormData.name.toString());
    // Perform any necessary post-request actions here
    // For example: mutate data, revalidate cache, etc.
    
  } catch (error) {
    console.error('Error creating location:', error);
    throw new Error('Failed to create location.');
  }
  redirect('/dashboard/data-lokasi');
}

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


 