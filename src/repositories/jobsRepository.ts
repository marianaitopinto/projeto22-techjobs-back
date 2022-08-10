import { prisma } from "../database.js";
import { jobsData } from "../services/jobsServices.js";

export async function checkIsCompany(id: number, type: number) {
  return prisma.users.findFirst({ where: { id, type: 2 } });
}

export async function createJob(data: jobsData) {
  return prisma.jobs.create({ data });
}
