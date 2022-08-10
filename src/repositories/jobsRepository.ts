import { jobs } from "@prisma/client";
import { prisma } from "../database.js";
import { jobsData } from "../services/jobsServices.js";

export async function checkIsCompany(id: number, type: number) {
  return prisma.users.findFirst({ where: { id, type: 2 } });
}

export async function createJob(data: jobsData) {
  return prisma.jobs.create({ data });
}

export async function updateJob(
  id: number,
  description: string,
  status: string
) {
  return prisma.jobs.update({
    where: { id },
    data: { description, status },
  });
}

export async function findJobById(id: number) {
  return prisma.jobs.findFirst({ where: { id } });
}
