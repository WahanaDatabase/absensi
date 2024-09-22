import { prisma } from './client'

export async function getAttendancesFromDb() {
  const attendance = await prisma.attendance.findMany({
    include: {
      Employee: true
    },
  })
  return attendance
}


