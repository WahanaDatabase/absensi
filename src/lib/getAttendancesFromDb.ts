import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function getAttendancesFromDb() {
  const attendance = await prisma.attendance.findMany()
  return attendance
}


