import { PrismaClient } from "@prisma/client";

// seed.js
const prisma = new PrismaClient();

export async function main() {
  const newUser = await prisma.user.create({
    data: {
      email: 'example@example.com',
      name: 'John Doe',
    },
  });
  console.log('Inserted user:', newUser);
}