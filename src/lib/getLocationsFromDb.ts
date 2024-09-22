import { prisma } from './client'

export async function getLocationsFromDb() {
  const location = await prisma.location.findMany()
  return location
}


