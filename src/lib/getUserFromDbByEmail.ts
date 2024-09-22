import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function getUserFromDbByEmail(email:any) {
  const user = await prisma.user.findUnique({
    where:{
     email:email
    }
  })
  return user
}


