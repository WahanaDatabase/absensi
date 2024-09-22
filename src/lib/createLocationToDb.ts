import { prisma } from './client'
export async function createLocationToDb(name:string, lat:number, long:number, qr:string) {


 

  try {
    await prisma.location.create({
      data: {
        nama_location: name,
        latitude: lat,
        longitude: long,
        qr_code: qr,
      },
    });
  } catch (error) {
    console.error('Error creating location in the database:', error);
    throw new Error('Failed to create location in the database.');
  }
}