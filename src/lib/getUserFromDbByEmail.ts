import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient();

export async function getUserFromDbByEmail(email: string) {
  try {
    const user = await prisma.user.findUnique({
      where: {
        email: email,
      },
    });
    return user;
  } catch (error) {
    console.error("Error fetching user from database:", error);
    throw error; // Propagate error to the calling function
  } finally {
    await prisma.$disconnect(); // Ensure PrismaClient is properly disconnected after the query
  }
}
