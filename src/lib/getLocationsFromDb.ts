import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function getLocationsFromDb() {
  const location = await prisma.location.findMany()
  return location
}


