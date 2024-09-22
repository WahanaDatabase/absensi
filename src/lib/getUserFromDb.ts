import { prisma } from './client'

export async function getUserFromDb(id:any) {
  const user = await prisma.user.findUnique({
    where:{
      id:Number(id)
    }
  })
  return user
}


