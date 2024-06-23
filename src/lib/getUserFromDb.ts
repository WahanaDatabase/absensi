import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function getUserFromDb(email:any) {
  const user = await prisma.user.findUnique({
    where:{
      email
    }
  })
  return user
}


