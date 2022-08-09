import { prisma } from "../database.js";
import { userData } from "../services/authServices.js";

export async function findUserByEmail(email: string) {
  return prisma.users.findFirst({ where: { email } });
}

export async function insertUser(user: userData) {
  return prisma.users.create({ data: user });
}
