import { prisma } from './client'

export async function getUsersFromDb() {
  const users = await prisma.user.findMany()
  return users
}


