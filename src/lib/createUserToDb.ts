import { prisma } from './client'
export async function createUserToDb(name:string, group:string, email:string, no:string,password:string) {


 

  try {
    await prisma.user.create({
      data: {
        name:name,
        group:group,
        email:email,
        no_hp:no,
        password:password,
        role:"user"
      },
    });
  } catch (error) {
    console.error('Error creating location in the database:', error);
    throw new Error('Failed to create location in the database.');
  }
}